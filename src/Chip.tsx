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
import { ChipDefinition, ChipVariant } from "./chips/common";

function formatVariantName(str: string) {
  return str.split("\n").flatMap((rawLine, i, lines) => {
    const line =
      i === 0 ? (
        <strong key={i}>{rawLine}</strong>
      ) : (
        <small key={i}>{rawLine}</small>
      );

    if (i === lines.length - 1) {
      return line;
    }
    return [line, <br key={`${i}_br`} />];
  });
}

function handlePin(
  chip: ChipDefinition,
  variant: ChipVariant,
  idx: number,
  reverse: boolean,
  visibleData: string[]
) {
  const pinName = variant.pins[idx]!;
  return {
    number: idx + 1,
    ...handleAdditionalPin(chip, pinName, reverse, visibleData),
  };
}

function handleAdditionalPin(
  chip: ChipDefinition,
  pinName: string,
  reverse: boolean,
  visibleData: string[]
) {
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
  } else if (["VCC", "VDD"].includes(pinName)) {
    nameStyle.background = "red";
    nameStyle.color = getContrastColor("red");
  } else if (["GND", "VSS"].includes(pinName)) {
    nameStyle.background = "black";
    nameStyle.color = getContrastColor("black");
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

export function Chip({ chip }: { chip: ChipDefinition }) {
  const [visibleData, setVisibleData] = React.useState(
    chip.data
      .filter(({ defaultHidden }) => defaultHidden !== true)
      .map(({ name }) => name)
  );
  const {
    settings: { fontSize, ics },
  } = React.useContext(SettingsContext);

  return (
    <>
      <div className="wrapper">
        {ics.length !== 1 && (
          <h2 id={`IC-${chip.name}`}>
            {chip.manufacturer} {chip.name}{" "}
            <small>
              ({chip.variants.length}{" "}
              {chip.variants.length === 1 ? "variant" : "variants"})
            </small>
          </h2>
        )}
        {chip.notes && <p>{chip.notes}</p>}
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
}

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
          `The variant ${variant.name} must have a number of pins divisible by 4.`
        );
      }
      break;
    default:
      throw new Error("Unknown package Only 'dual' and 'quad' are supported.");
  }

  const {
    settings: { alignData },
  } = React.useContext(SettingsContext);

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
                alignData={alignData}
              />
            ) : (
              <QuadPackage
                chip={chip}
                variant={variant}
                visibleData={visibleData}
                // TODO: Not yet supported
                // alignData={alignData}
              />
            )}
          </tbody>
        </table>
      </div>
      {marginBottom && <div style={{ marginBottom: "5em" }} />}
    </>
  );
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
  const alignData = false; // TODO: Not yet supported.

  const pinsPerSide = variant.pins.length / 4;

  return (
    <>
      <QuadVerticalPins
        pinsPerSide={pinsPerSide}
        side="top"
        chip={chip}
        variant={variant}
        visibleData={visibleData}
        alignData={alignData}
      />
      {nTimes(pinsPerSide).map((i) => {
        const pinLeft = handlePin(chip, variant, i, true, visibleData);
        const pinRight = handlePin(
          chip,
          variant,
          pinsPerSide - 1 - i + pinsPerSide * 2,
          false,
          visibleData
        );

        return (
          <tr key={i}>
            <PinRow side="left" alignData={alignData} pin={pinLeft} />

            <td className="badge pin-name" style={pinLeft.name.style}>
              {pinLeft.name.value}
            </td>
            <td className="pin-number">{pinLeft.number}</td>
            {i === 0 && (
              <td className="ic" rowSpan={pinsPerSide} colSpan={pinsPerSide}>
                {chip.manufacturer && (
                  <>
                    {chip.manufacturer} <br />
                  </>
                )}
                {ensureIsArray(variant.name ?? chip.name).map(
                  (name, i, names) => (
                    <React.Fragment key={i}>
                      {formatVariantName(name)}
                      {i !== names.length - 1 && <hr />}
                    </React.Fragment>
                  )
                )}
              </td>
            )}
            <td className="pin-number">{pinRight.number}</td>
            <td className="badge pin-name" style={pinRight.name.style}>
              {pinRight.name.value}
            </td>

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
}: {
  pinsPerSide: number;
  side: "top" | "bottom";
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
  alignData: boolean;
}) {
  const getPinIdx = (i: number) =>
    side === "top" ? pinsPerSide * 4 - i : pinsPerSide + 1 + i;
  const writingMode = "vertical-lr";

  const rows = [
    <tr key="pin-number">
      <td colSpan={3} />
      {nTimes(pinsPerSide).map((i) => {
        const pinIdx = getPinIdx(i);
        return (
          <td key={pinIdx} className="pin-number" style={{ writingMode }}>
            {pinIdx}
          </td>
        );
      })}
      <td colSpan={3} />
    </tr>,
    <tr key="pin-name">
      <td colSpan={3} />
      {nTimes(pinsPerSide).map((i) => {
        const pinIdx = getPinIdx(i);
        const pin = handlePin(
          chip,
          variant,
          pinIdx - 1,
          side === "top",
          visibleData
        );

        return (
          <td
            key={pinIdx}
            className="badge pin-name"
            style={{ ...pin.name.style, writingMode }}
          >
            {pin.name.value}
          </td>
        );
      })}
      <td />
      <td colSpan={2} rowSpan={2} style={{ verticalAlign: "top" }}>
        {side === "bottom" && (
          <table>
            <tbody>
              {variant.additionalPins?.map(
                ({ description, pin: pinName }, i) => {
                  const pin = handleAdditionalPin(
                    chip,
                    pinName,
                    false,
                    visibleData
                  );
                  return (
                    <tr key={i}>
                      <td
                        colSpan={pinsPerSide + 1}
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
                }
              )}
            </tbody>
          </table>
        )}
      </td>
    </tr>,
    <tr key="pin-data">
      <td colSpan={3} />
      {nTimes(pinsPerSide).map((i) => {
        const pinIdx = getPinIdx(i);
        const pin = handlePin(
          chip,
          variant,
          pinIdx - 1,
          side === "top",
          visibleData
        );
        return (
          <PinRow key={pinIdx} side={side} alignData={alignData} pin={pin} />
        );
      })}
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
  alignData,
}: {
  chip: ChipDefinition;
  variant: ChipVariant;
  visibleData: string[];
  alignData: boolean;
}) {
  return (
    <>
      {nTimes(variant.pins.length / 2).map((i) => {
        const pinLeft = handlePin(chip, variant, i, true, visibleData);
        const pinRight = handlePin(
          chip,
          variant,
          variant.pins.length - i - 1,
          false,
          visibleData
        );

        return (
          <tr key={i}>
            <PinRow side="left" alignData={alignData} pin={pinLeft} />

            <td className="badge pin-name" style={pinLeft.name.style}>
              {pinLeft.name.value}
            </td>
            <td className="pin-number">{pinLeft.number}</td>
            {i === 0 && (
              <td className="ic" rowSpan={variant.pins.length / 2}>
                {chip.manufacturer && (
                  <>
                    {chip.manufacturer} <br />
                  </>
                )}
                {ensureIsArray(variant.name ?? chip.name).map(
                  (name, i, names) => (
                    <React.Fragment key={i}>
                      {formatVariantName(name)}
                      {i !== names.length - 1 && <hr />}
                    </React.Fragment>
                  )
                )}
              </td>
            )}
            <td className="pin-number">{pinRight.number}</td>
            <td className="badge pin-name" style={pinRight.name.style}>
              {pinRight.name.value}
            </td>

            <PinRow side="right" alignData={alignData} pin={pinRight} />
          </tr>
        );
      })}
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
}

function PinRow({
  side,
  alignData,
  pin,
}: {
  side: "top" | "bottom" | "left" | "right";
  alignData: boolean;
  pin: {
    tags: Array<{ style: Record<string, unknown>; values: string[] } | null>;
  };
}) {
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
}: {
  tag: { style: CSSProperties; values: string[] };
  element?: string;
}) {
  return React.createElement(
    element ?? "td",
    { className: "badge", style },
    ...separateArrayBy(
      values.map((value) => <div className="badge-text">{value}</div>),
      // This space is important -> otherwise copy/pasting will not include a space
      <span className="badge-divider"> </span>
    )
  );
}
