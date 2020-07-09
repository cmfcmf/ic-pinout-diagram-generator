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
          color: fontColor
        }
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
    "number": idx + 1,
    "name": {
      value: pinName,
      style: nameStyle,
    },
    tags: functions
  };
}

export function Chip({ chip }) {
  const [visibleData, setVisibleData] = React.useState(
    chip.data
      .filter(({ defaultHidden }) => defaultHidden !== true)
      .map(({ name }) => name));
  const { settings: { fontSize, ics } } = React.useContext(SettingsContext);

  const variants = chip.variants;

  return <>
    <div className="wrapper">
      {ics.length !== 1 && <h2 id={`IC-${chip.name}`}>{chip.name} <small>({variants.length} variants)</small></h2>}
      {chip.notes && <p>{chip.notes}</p>}
      <Legend chip={chip} variants={variants} visibleData={visibleData} setVisibleData={setVisibleData} />
    </div>
    <div style={{ fontSize }}>
      {variants.map((variant, i) =>
        <Variant key={i} chip={chip} variant={variant} visibleData={visibleData} marginBottom={i < variants.length - 1} />)}
    </div>
  </>;
}

function Legend({ chip, visibleData, setVisibleData }) {
  return <div className="legend">
    {chip.data.map(({ color, name }) => <label key={name} className="badge" style={{
      color: getContrastColor(color),
      background: color,
    }}>
      <input type="checkbox" value="1" checked={visibleData.includes(name)} onChange={evt => {
        if (evt.target.checked) {
          setVisibleData(visibleData => [...visibleData, name]);
        } else {
          setVisibleData(visibleData => visibleData.filter(each => each !== name));
        }
      }} />
      {name}
    </label>)}
  </div>;
}

function Variant({ chip, variant, visibleData, marginBottom }) {
  console.assert(variant.pins.length % 2 === 0);

  const { settings: { alignData } } = React.useContext(SettingsContext);
  return <div className="table-responsive">
    <table>
      <tbody>
        {nTimes(variant.pins.length / 2).map(i => {
          const pinLeft = handlePin(chip, variant, i, true, visibleData);
          let leftFirstTagIndex = pinLeft.tags.findIndex(each => each !== null);
          if (leftFirstTagIndex === -1) {
            leftFirstTagIndex = Infinity;
          }

          const pinRight = handlePin(chip, variant, variant.pins.length - i - 1, false, visibleData);
          let rightLastTagIndex = findLastIndex(pinRight.tags, each => each !== null);
          if (rightLastTagIndex === -1) {
            rightLastTagIndex = 0;
          }

          return <tr key={i}>
            {alignData
              ? <>
                {pinLeft.tags.map((tag, i) => tag === null
                  ? <td key={i} className={i >= leftFirstTagIndex ? "empty" : ""} />
                  : <td
                    key={i}
                    className="badge"
                    style={tag.style}>{tag.value}</td>)}
              </>
              : <td style={{ textAlign: 'right' }}>
                <div className="dense">
                  {pinLeft.tags.filter(tag => tag !== null).map((tag, i) =>
                    <div
                      key={i}
                      className="badge"
                      style={tag.style}>{tag.value}</div>)}
                </div>
              </td>}

            <td className="badge pin-name" style={pinLeft.name.style}>{pinLeft.name.value}</td>
            <td className="pin-number">{pinLeft.number}</td>
            {i === 0 && <td className="ic" rowSpan={variant.pins.length / 2}>
              {chip.name}
              <br />
              {variant.name}
            </td>}
            <td className="pin-number">{pinRight.number}</td>
            <td className="badge pin-name" style={pinRight.name.style}>{pinRight.name.value}</td>

            {alignData
              ? <>
                {pinRight.tags.map((tag, i) => tag === null
                  ? <td key={i} className={i < rightLastTagIndex ? "empty" : ""} />
                  : <td
                    key={i}
                    className="badge"
                    style={tag.style}>{tag.value}</td>)}
              </>
              : <td style={{ textAlign: 'left' }}>
                <div className="dense">
                  {pinRight.tags.filter(tag => tag !== null).map((tag, i) =>
                    <div
                      key={i}
                      className="badge"
                      style={tag.style}>{tag.value}</div>)}
                </div>
              </td>
            }
          </tr>;
        })}
      </tbody>
    </table>
    {marginBottom && <div style={{ marginBottom: '5em' }} />}
  </div>;
}