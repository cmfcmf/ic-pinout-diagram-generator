import React, { CSSProperties } from "react";
import {
  getContrastColor,
  reversed,
  nTimes,
  findLastIndex,
  ensureIsArray,
  separateArrayBy,
} from "./util";
import { SettingsContext } from "./Settings";
import {
  ChipDefinition,
  ChipVariant,
  SKIPPED_PIN,
  SKIPPED_PIN_WITH_NUMBER,
} from "./chips/common";

function formatVariantName(str: string) {
  return str.split("\n").flatMap((rawLine, i, lines) => {
    const line =
      i === 0 ? (
        <strong key={i}>{rawLine}</strong>
      ) : (
        <small key={i}>{rawLine}</small>
      );

    return i === 0 ? line : [<br key={`${i}_br`} />, line];
  });
}

function nl2br(str: string) {
  return str.split("\n").flatMap((line, i) => {
    return i === 0 ? line : [<br key={`${i}_br`} />, line];
  });
}

type PinWithFunctions = {
  name: {
    value: string;
    style: CSSProperties;
  };
  tags: Array<null | {
    values: string[];
    style: { background: string; color: string };
  }>;
};

type PinWithFunctionsAndNumber = PinWithFunctions & { number: number };

function handlePin(
  chip: ChipDefinition,
  variant: ChipVariant,
  idx: number,
  showIdx: number,
  reverse: boolean,
  visibleData: string[]
): PinWithFunctionsAndNumber {
  const pinName = variant.pins[idx] as string;
  return {
    number: showIdx + 1,
    ...handleAdditionalPin(chip, pinName, reverse, visibleData),
  };
}

function handleAdditionalPin(
  chip: ChipDefinition,
  pinName: string,
  reverse: boolean,
  visibleData: string[]
): PinWithFunctions {
  let functions = [];
  const data = !reverse ? chip.data : reversed(chip.data);
  for (const entry of data) {
    if (!visibleData.includes(entry.name)) {
      continue;
    }
    const pins = Object.entries(entry.pins);
    const backgroundColor = entry.color ?? "white";
    const fontColor = getContrastColor(backgroundColor);

    const values = [];

    for (let [tagValue, pinKeys] of pins) {
      if (!Array.isArray(pinKeys)) {
        pinKeys = [pinKeys];
      }

      for (const pinKey of pinKeys) {
        if (pinKey === pinName) {
          values.push(tagValue);
        }
      }
    }

    if (values.length) {
      functions.push({
        values,
        style: {
          background: backgroundColor,
          color: fontColor,
        },
      });
    } else {
      functions.push(null);
    }
  }

  const nameStyle: CSSProperties = {};
  if (chip.pins?.[pinName]?.color !== undefined) {
    nameStyle.background = chip.pins[pinName]!.color;
    nameStyle.color = getContrastColor(nameStyle.background);
  } else if (["VCC", "VDD", "V5", "5V", "5V0"].includes(pinName)) {
    nameStyle.background = "red";
    nameStyle.color = getContrastColor("red");
  } else if (["V33", "3V3", "VDDIO"].includes(pinName)) {
    nameStyle.background = "#d00000";
    nameStyle.color = getContrastColor("#d00000");
  } else if (["V18", "1V8", "V11", "1V1", "Vcore"].includes(pinName)) {
    nameStyle.background = "#700000";
    nameStyle.color = getContrastColor("#700000");
  } else if (["GND", "VSS", "AGND"].includes(pinName)) {
    nameStyle.background = "black";
    nameStyle.color = getContrastColor("black");
  } else if (["XI", "XO", "XI*", "XO*"].includes(pinName)) {
    nameStyle.background = "#ff8000";
    nameStyle.color = getContrastColor("#ff8000");
  } else if (["RST", "RSTn", "RES", "RESn", "RUN"].includes(pinName)) {
    nameStyle.background = "#40c000";
    nameStyle.color = getContrastColor("#40c000");
  } else if (["TST"].includes(pinName)) {
    nameStyle.background = "#404040";
    nameStyle.color = getContrastColor("#404040");
  } else if ("nc" === pinName) {
    nameStyle.background = "white";
    nameStyle.color = getContrastColor("white");
    nameStyle.borderStyle = "dashed";
  }

  return {
    name: {
      value: pinName,
      style: nameStyle,
    },
    tags: functions,
  };
}

export const Chip = React.memo(function Chip({
  chip,
  showName,
  fontSize,
}: {
  chip: ChipDefinition;
  showName: boolean;
  fontSize: number;
}) {
  const [visibleData, setVisibleData] = React.useState(() =>
    chip.data
      .filter(({ defaultHidden }) => defaultHidden !== true)
      .map(({ name }) => name)
  );

  return (
    <>
      <div className="wrapper">
        {showName && (
          <h2 id={`IC-${chip.name}`}>
            {chip.manufacturer} {chip.name}{" "}
            <small>
              ({chip.variants.length} package{" "}
              {chip.variants.length === 1 ? "variant" : "variants"})
            </small>
          </h2>
        )}
        {chip.notes && <p>{nl2br(chip.notes)}</p>}
        <Legend
          chip={chip}
          visibleData={visibleData}
          setVisibleData={setVisibleData}
        />
      </div>
      <div style={{ fontSize }}>
        {chip.variants.map((variant, i) => (
          <Variant
            key={i}
            chip={chip}
            variant={variant}
            visibleData={visibleData}
            marginBottom={i < chip.variants.length - 1}
          />
        ))}
      </div>
    </>
  );
});

function Legend({
  chip,
  visibleData,
  setVisibleData,
}: {
  chip: ChipDefinition;
  visibleData: string[];
  setVisibleData: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className="legend">
      {chip.data.map(({ color, name }) => (
        <label
          key={name}
          className="badge"
          style={{
            color: getContrastColor(color),
            background: color,
          }}
        >
          <input
            type="checkbox"
            value="1"
            checked={visibleData.includes(name)}
            onChange={(evt) => {
              if (evt.target.checked) {
                setVisibleData((visibleData) => [...visibleData, name]);
              } else {
                setVisibleData((visibleData) =>
                  visibleData.filter((each) => each !== name)
                );
              }
            }}
          />
          {name}
        </label>
      ))}
    </div>
  );
}

function Variant({
  chip,
  variant,
  visibleData,
  marginBottom,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
  marginBottom: boolean;
}) {
  const pkg = variant.package ?? "dual";
  switch (pkg) {
    case "dual":
      if (variant.pins.length % 2 !== 0) {
        throw new Error(
          `The variant ${variant.name} must have an even number of pins`
        );
      }
      break;
    case "quad":
      if (variant.pins.length % 4 !== 0) {
        throw new Error(
          `The variant ${variant.name} must have a number of pins divisible by 4, but has ${variant.pins.length} pins.`
        );
      }
      break;
    default:
      throw new Error("Unknown package Only 'dual' and 'quad' are supported.");
  }

  return (
    <>
      <div className="table-responsive">
        <table className="pinout">
          <tbody>
            {pkg === "dual" ? (
              <DualPackage
                chip={chip}
                variant={variant}
                visibleData={visibleData}
              />
            ) : (
              <QuadPackage
                chip={chip}
                variant={variant}
                visibleData={visibleData}
              />
            )}
          </tbody>
        </table>
      </div>
      {marginBottom && <div style={{ marginBottom: "5em" }} />}
    </>
  );
}

// generate pin numbers from pin names and preserve missing entries
function pinNumbering(
  pins: (string | SKIPPED_PIN | SKIPPED_PIN_WITH_NUMBER)[]
): (number | null)[] {
  let run = 0;
  return pins.map((pin) => {
    if (pin === SKIPPED_PIN) return null;
    const before = run;
    run += 1;
    return pin === SKIPPED_PIN_WITH_NUMBER ? null : before;
  });
}

function QuadPackage({
  chip,
  variant,
  visibleData,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
}) {
  // TODO: Not yet supported.
  // const {
  //   settings: { alignData },
  // } = React.useContext(SettingsContext);
  const alignData = false;

  const pinsPerSide = variant.pins.length / 4;
  const pinNumbers = pinNumbering(variant.pins);

  return (
    <>
      <QuadVerticalPins
        pinsPerSide={pinsPerSide}
        side="top"
        chip={chip}
        variant={variant}
        visibleData={visibleData}
        alignData={alignData}
        pinNumbers={pinNumbers}
      />
      {nTimes(pinsPerSide).map((i) => {
        const rightIndex = pinsPerSide - 1 - i + pinsPerSide * 2;

        const leftNumber = pinNumbers[i];
        const rightNumber = pinNumbers[rightIndex];
        const pinLeft =
          leftNumber != null &&
          handlePin(chip, variant, i, leftNumber, true, visibleData);
        const pinRight =
          rightNumber != null &&
          handlePin(chip, variant, rightIndex, rightNumber, false, visibleData);

        return (
          <tr key={i}>
            <PinRow side="left" alignData={alignData} pin={pinLeft} />
            <ICBodyAndPinNames
              chip={chip}
              variant={variant}
              pinLeft={pinLeft}
              pinRight={pinRight}
              isTopRow={i === 0}
            />
            <PinRow side="right" alignData={alignData} pin={pinRight} />
          </tr>
        );
      })}
      <QuadVerticalPins
        pinsPerSide={pinsPerSide}
        side="bottom"
        chip={chip}
        variant={variant}
        visibleData={visibleData}
        alignData={alignData}
        pinNumbers={pinNumbers}
      />
    </>
  );
}

function QuadVerticalPins({
  pinsPerSide,
  side,
  chip,
  variant,
  visibleData,
  alignData,
  pinNumbers,
}: {
  pinsPerSide: number;
  side: "top" | "bottom";
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
  alignData: boolean;
  pinNumbers: (number | null)[];
}) {
  const getPinIdx = (i: number) =>
    side === "top" ? pinsPerSide * 4 - i : pinsPerSide + 1 + i;
  const writingMode = "vertical-lr";

  const pinDatas = nTimes(pinsPerSide).map((i) => {
    const pinIdx = getPinIdx(i);
    const pinNum = pinNumbers[pinIdx - 1];
    const pin =
      pinNum != null &&
      handlePin(chip, variant, pinIdx - 1, pinNum, side === "top", visibleData);
    return [pinIdx, pin] as const;
  });

  const rows = [
    <tr key="pin-number">
      <td colSpan={3} />
      {pinDatas.map(([pinIdx, pin]) =>
        pin ? (
          <td key={pinIdx} className="pin-number">
            {pin.number}
          </td>
        ) : (
          <td key={pinIdx} className="pin-placeholder">
            00
          </td>
        )
      )}
      <td colSpan={3} />
    </tr>,
    <tr key="pin-name">
      <td colSpan={3} />
      {pinDatas.map(([pinIdx, pin]) =>
        pin ? (
          <td
            key={pinIdx}
            className="badge pin-name"
            style={{ ...pin.name.style, writingMode }}
          >
            {pin.name.value}
          </td>
        ) : (
          <td key={pinIdx} />
        )
      )}
      <td />
      <td colSpan={2} rowSpan={2} style={{ verticalAlign: "top" }}>
        {side === "bottom" && (
          <table>
            <tbody>
              <AdditionalPins
                chip={chip}
                variant={variant}
                visibleData={visibleData}
                alignData={alignData}
              />
            </tbody>
          </table>
        )}
      </td>
    </tr>,
    <tr key="pin-data">
      <td colSpan={3} />
      {pinDatas.map(([pinIdx, pin]) => (
        <PinRow key={pinIdx} side={side} alignData={alignData} pin={pin} />
      ))}
      <td />
    </tr>,
  ];

  if (side === "top") {
    rows.reverse();
  }

  return <>{rows}</>;
}

function DualPackage({
  chip,
  variant,
  visibleData,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
}) {
  const {
    settings: { alignData },
  } = React.useContext(SettingsContext);

  const pinNumbers = pinNumbering(variant.pins);

  return (
    <>
      {nTimes(variant.pins.length / 2).map((i) => {
        const rightIndex = variant.pins.length - i - 1;

        const leftNumber = pinNumbers[i];
        const rightNumber = pinNumbers[rightIndex];
        const pinLeft =
          leftNumber != null &&
          handlePin(chip, variant, i, leftNumber, true, visibleData);
        const pinRight =
          rightNumber != null &&
          handlePin(chip, variant, rightIndex, rightNumber, false, visibleData);

        return (
          <tr key={i}>
            <PinRow side="left" alignData={alignData} pin={pinLeft} />
            <ICBodyAndPinNames
              chip={chip}
              variant={variant}
              pinLeft={pinLeft}
              pinRight={pinRight}
              isTopRow={i === 0}
            />
            <PinRow side="right" alignData={alignData} pin={pinRight} />
          </tr>
        );
      })}
      <AdditionalPins
        chip={chip}
        variant={variant}
        visibleData={visibleData}
        alignData={alignData}
      />
    </>
  );
}

const AdditionalPins = React.memo(function AdditionalPins({
  chip,
  variant,
  visibleData,
  alignData,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
  alignData: boolean;
}) {
  return (
    <>
      {variant.additionalPins?.map(({ description, pin: pinName }, i) => {
        const pin = handleAdditionalPin(chip, pinName, false, visibleData);
        return (
          <tr key={i}>
            <td
              colSpan={(alignData ? chip.data.length : 1) + 4}
              style={{ textAlign: "right" }}
            >
              {description}
            </td>
            <td className="badge pin-name" style={pin.name.style}>
              {pin.name.value}
            </td>
            <PinRow side="right" alignData={alignData} pin={pin} />
          </tr>
        );
      })}
    </>
  );
});

function ICBodyAndPinNames({
  chip,
  variant,
  pinLeft,
  pinRight,
  isTopRow,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  pinLeft: PinWithFunctionsAndNumber | false;
  pinRight: PinWithFunctionsAndNumber | false;
  isTopRow: boolean;
}) {
  const rowSpan =
    (variant.package ?? "dual") === "dual"
      ? variant.pins.length / 2
      : variant.pins.length / 4;
  const colSpan =
    (variant.package ?? "dual") === "dual" ? 1 : variant.pins.length / 4;

  return (
    <>
      {pinLeft ? (
        <>
          <td className="badge pin-name" style={pinLeft.name.style}>
            {pinLeft.name.value}
          </td>
          <td className="pin-number">{pinLeft.number}</td>
        </>
      ) : (
        <td colSpan={2} className="pin-placeholder">
          00
        </td>
      )}
      {isTopRow && (
        <td className="ic" rowSpan={rowSpan} colSpan={colSpan}>
          {chip.manufacturer && (
            <>
              {chip.manufacturer}
              <br />
            </>
          )}
          {ensureIsArray(variant.name ?? chip.name).map((name, i, names) => (
            <React.Fragment key={i}>
              {formatVariantName(name)}
              {i !== names.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </td>
      )}
      {pinRight ? (
        <>
          <td className="pin-number">{pinRight.number}</td>
          <td className="badge pin-name" style={pinRight.name.style}>
            {pinRight.name.value}
          </td>
        </>
      ) : (
        <td colSpan={2} className="pin-placeholder">
          00
        </td>
      )}
    </>
  );
}

function PinRow({
  side,
  alignData,
  pin,
}: {
  side: "top" | "bottom" | "left" | "right";
  alignData: boolean;
  pin: PinWithFunctions | false;
}) {
  if (pin === false) return <td />;

  let leftFirstTagIndex = pin.tags.findIndex((each) => each !== null);
  if (leftFirstTagIndex === -1) {
    leftFirstTagIndex = Infinity;
  }

  let rightLastTagIndex = findLastIndex(pin.tags, (each) => each !== null);
  if (rightLastTagIndex === -1) {
    rightLastTagIndex = 0;
  }

  return (
    <>
      {alignData ? (
        <>
          {pin.tags.map((tag, i) =>
            tag === null ? (
              <td
                key={i}
                className={
                  (side === "right" && i < rightLastTagIndex) ||
                  (side === "left" && i >= leftFirstTagIndex)
                    ? "empty"
                    : ""
                }
              />
            ) : (
              <Tag key={i} tag={tag} />
            )
          )}
        </>
      ) : (
        <td
          style={{
            textAlign: side === "left" || side === "top" ? "right" : "left",
            writingMode:
              side === "bottom" || side === "top" ? "vertical-lr" : undefined,
          }}
        >
          <div className="dense">
            {pin.tags
              .flatMap((tag) => (tag !== null ? tag : []))
              .map((tag, i) => (
                <Tag key={i} element="div" tag={tag} />
              ))}
          </div>
        </td>
      )}
    </>
  );
}

function Tag({
  tag: { style, values },
  element,
  onHover,
}: {
  tag: { style: CSSProperties; values: string[] };
  element?: string;
  onHover?: (hover: boolean) => void;
}) {
  const eventHandlers = onHover
    ? { onMouseOver: () => onHover(true), onMouseOut: () => onHover(false) }
    : {};
  return React.createElement(
    element ?? "td",
    { className: "badge", style },
    ...separateArrayBy(
      values.map((value) => (
        <div className="badge-text" {...eventHandlers}>
          {value}
        </div>
      )),
      // This space is important -> otherwise copy/pasting will not include a space
      <span className="badge-divider"> </span>
    )
  );
}
