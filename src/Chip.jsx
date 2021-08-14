import React from "react";
import { getContrastColor, reversed, nTimes, findLastIndex } from "./util";
import { SettingsContext } from "./Settings";

function handlePin(chip, variant, idx, isLeft, visibleData) {
  const pinName = variant.pins[idx];

  let functions = [];
  const data = !isLeft ? chip.data : reversed(chip.data);
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
        value: values.join(", "),
        style: {
          background: backgroundColor,
          color: fontColor,
        },
      });
    } else {
      functions.push(null);
    }
  }

  const nameStyle = {};
  if (["VCC", "VDD"].includes(pinName)) {
    nameStyle.background = "red";
    nameStyle.color = getContrastColor("red");
  } else if (["GND", "VSS"].includes(pinName)) {
    nameStyle.background = "black";
    nameStyle.color = getContrastColor("black");
  }

  return {
    number: idx + 1,
    name: {
      value: pinName,
      style: nameStyle,
    },
    tags: functions,
  };
}

export function Chip({ chip }) {
  const [visibleData, setVisibleData] = React.useState(
    chip.data
      .filter(({ defaultHidden }) => defaultHidden !== true)
      .map(({ name }) => name)
  );
  const {
    settings: { fontSize, ics },
  } = React.useContext(SettingsContext);

  const variants = chip.variants;

  return (
    <>
      <div className="wrapper">
        {ics.length !== 1 && (
          <h2 id={`IC-${chip.name}`}>
            {chip.manufacturer} {chip.name}{" "}
            <small>({variants.length} variants)</small>
          </h2>
        )}
        {chip.notes && <p>{chip.notes}</p>}
        <Legend
          chip={chip}
          variants={variants}
          visibleData={visibleData}
          setVisibleData={setVisibleData}
        />
      </div>
      <div style={{ fontSize }}>
        {variants.map((variant, i) => (
          <Variant
            key={i}
            chip={chip}
            variant={variant}
            visibleData={visibleData}
            marginBottom={i < variants.length - 1}
          />
        ))}
      </div>
    </>
  );
}

function Legend({ chip, visibleData, setVisibleData }) {
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

function Variant({ chip, variant, visibleData, marginBottom }) {
  const pkg = variant.package ?? "DIP";
  switch (pkg) {
    case "DIP":
      console.assert(variant.pins.length % 2 === 0);
      break;
    case "QFN":
      console.assert((variant.pins.length - 1) % 4 === 0);
      break;
    default:
      throw new Error("Unknown package.");
  }

  const {
    settings: { alignData },
  } = React.useContext(SettingsContext);

  return (
    <>
      <div className="table-responsive">
        <table>
          <tbody>
            {pkg === "DIP" ? (
              <DIPPackage
                chip={chip}
                variant={variant}
                visibleData={visibleData}
                alignData={alignData}
              />
            ) : (
              <QFNPackage
                chip={chip}
                variant={variant}
                visibleData={visibleData}
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

function QFNPackage({ chip, variant, visibleData }) {
  const alignData = false; // TODO: Not yet supported.

  const pinsPerSide = (variant.pins.length - 1) / 4;

  const centerPin = handlePin(
    chip,
    variant,
    variant.pins.length - 1,
    false,
    visibleData
  );

  return (
    <>
      <QFNVerticalPins
        pinsPerSide={pinsPerSide}
        side="top"
        chip={chip}
        variant={variant}
        visibleData={visibleData}
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
                {chip.name}
                <br />
                {variant.name}
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
      <QFNVerticalPins
        pinsPerSide={pinsPerSide}
        side="bottom"
        chip={chip}
        variant={variant}
        visibleData={visibleData}
      />

      <tr>
        <td colSpan={3} />
        <td colSpan={pinsPerSide} style={{ textAlign: "right" }}>
          Center Pad
        </td>
        <td className="pin-number">{centerPin.number}</td>
        <td className="badge pin-name" style={centerPin.name.style}>
          {centerPin.name.value}
        </td>
        <PinRow side="left" alignData={alignData} pin={centerPin} />
      </tr>
    </>
  );
}

function QFNVerticalPins({
  pinsPerSide,
  side,
  chip,
  variant,
  visibleData,
  alignData,
}) {
  const getPinIdx = (i) =>
    side === "top" ? variant.pins.length - 1 - i : pinsPerSide + 1 + i;
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
        const pin = handlePin(chip, variant, pinIdx, true, visibleData);

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
      <td colSpan={3} />
    </tr>,
    <tr key="pin-data">
      <td colSpan={3} />
      {nTimes(pinsPerSide).map((i) => {
        const pinIdx = getPinIdx(i);
        const pin = handlePin(chip, variant, pinIdx, true, visibleData);
        return (
          <PinRow key={pinIdx} side="bottom" alignData={alignData} pin={pin} />
        );
      })}
      <td colSpan={3} />
    </tr>,
  ];

  if (side === "top") {
    rows.reverse();
  }

  return rows;
}

function DIPPackage({ chip, variant, visibleData, alignData }) {
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
                {chip.name}
                <br />
                {variant.name}
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
    </>
  );
}

function PinRow({ side, alignData, pin }) {
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
            writingMode: side === "bottom" ? "vertical-lr" : undefined,
          }}
        >
          <div className="dense">
            {pin.tags
              .filter((tag) => tag !== null)
              .map((tag, i) => (
                <Tag key={i} element="div" tag={tag} />
              ))}
          </div>
        </td>
      )}
    </>
  );
}

function Tag({ tag: { style, value }, element }) {
  return React.createElement(
    element ?? "td",
    { className: "badge", style },
    value
  );
}
