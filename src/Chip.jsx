import React from "react";
import { getContrastColor, reversed, nTimes, findLastIndex } from "./util";
import { SettingsContext } from "./Settings";

function handlePin(chip, variant, idx, isLeft, alignData) {
  const pinName = variant.pins[idx];

  let functions = [];
  const data = !isLeft ? Object.values(chip.data) : reversed(Object.values(chip.data));
  for (const entry of data) {
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

  /*if (!alignData) {
    const gaps = functions.filter(f => f === null);
    if (isLeft) {
      functions = [...gaps, ...functions.filter(f => f !== null)];
    } else {
      functions = [...functions.filter(f => f !== null), ...gaps];
    }
  }*/

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
  const { settings: { alignData }} = React.useContext(SettingsContext);

  return <>
    <h1>{chip.name} <small>({chip.variants.length} variants)</small></h1>
    <table>
      <tbody>
        {chip.variants.map((variant, i) => {
          console.assert(variant.pins.length % 2 === 0);

          return <React.Fragment key={i}>
            {nTimes(variant.pins.length / 2).map(i => {
              const pinLeft = handlePin(chip, variant, i, true, alignData);
              let leftFirstTagIndex = pinLeft.tags.findIndex(each => each !== null);
              if (leftFirstTagIndex === -1) {
                leftFirstTagIndex = Infinity;
              }

              const pinRight = handlePin(chip, variant, variant.pins.length - i - 1, false, alignData);
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
                      <td className="badge pin-name" style={pinLeft.name.style}>{pinLeft.name.value}</td>
                    </>
                  : <td style={{textAlign: 'right'}}>
                    {pinLeft.tags.filter(tag => tag !== null).map((tag, i) =>
                      <div
                        key={i}
                        className="badge"
                        style={tag.style}>{tag.value}</div>)}
                    </td>}

                <td className="pin-number">{pinLeft.number}</td>
                {i === 0 && <td className="ic" rowSpan={variant.pins.length / 2}>
                  {chip.name}
                  <br />
                  {variant.name}
                </td>}
                <td className="pin-number">{pinRight.number}</td>

                {alignData
                  ? <>
                      <td className="badge pin-name" style={pinRight.name.style}>{pinRight.name.value}</td>
                      {pinRight.tags.map((tag, i) => tag === null
                        ? <td key={i} className={i < rightLastTagIndex ? "empty" : ""} />
                        : <td
                          key={i}
                          className="badge"
                          style={tag.style}>{tag.value}</td>)}
                    </>
                  : <td style={{textAlign: 'left'}}>
                    {pinRight.tags.filter(tag => tag !== null).map((tag, i) =>
                      <div
                        key={i}
                        className="badge"
                        style={tag.style}>{tag.value}</div>)}
                    </td>
                }
              </tr>;
            })}
            <tr className="divider"></tr>
          </React.Fragment>;
        })}
      </tbody>
    </table>
    {Object.entries(chip.data).map(([name, { color }]) => <p key={name} className="badge" style={{
      color: getContrastColor(color),
      background: color,
    }}>
      {name}
    </p>)}
  </>;
}