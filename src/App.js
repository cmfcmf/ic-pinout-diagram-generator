import React from 'react';
import './App.css';
import onecolor from 'onecolor/one-color-all'

const tags = {
  "Pull-up / Pull-down Availability and Maximum Currents": {
    pins: {
      "pull-up":         ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
      "pull-down":       [                                                                      "PB3", "PB2",                             "PC1", "PC0"],

      "sink: 10mA":      ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0",               "PC1",      ],
      "sink: 30mA":      [                                                                                                  "PC3", "PC2",        "PC0"],
      "sink: 10mA/40mA": [                                                        "PB5", "PB4",                                                       ],

      "drive: 0mA":      [              "PA5",                                                                                                        ],
      "drive: 5mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
      "drive: 5mA/20mA": [                                                        "PB5", "PB4",                                                       ],
    }
  },
  "Pins that can be set to VDD/2 (\"VDD/2 LCD Bias Voltage Generator\")": {
    pins: {
      "COM3": "PB5",
      "COM4": "PB6",
      "COM2": "PB2",
      "COM1": "PB1",
      "COM0": "PB0",
    }
  },
  "11 bit PWM Output Pin": {
    color: "#26B9E4",
    pins: {
      PWM2: ["PA5",        "PA3",                      "PB5",        "PB3", "PB2",               "PC0"],
      PWM1: [       "PA4",               "PB7", "PB6",                             "PC3"],
      PWM0: [                     "PA0",        "PB6", "PB5", "PB4",                      "PC2"],
    }
  },
  "Timer PWM Output Pin": {
    color: "#67CEEC",
    pins: {
      "T2 PWM": ["PA3", "PB4", "PB2"],
      "T3 PWM": ["PB7", "PB6", "PB5"],
    }
  },
  "ADC Input Channel": {
    color: "#95B600",
    pins: {
       ADC0: "PB0",
       ADC1: "PB1",
       ADC2: "PB2",
       ADC3: "PB3",
       ADC4: "PB4",
       ADC5: "PB5",
       ADC6: "PB6",
       ADC7: "PB7",
       ADC8: "PA3",
       ADC9: "PA4",
      ADC10: "PA0",
      ADC11: "PC1",
      ADC12: "PC2",
      AREF: "PB1"
    }
  },
  "Comparator Inputs and Output": {
    color: "#BFD366",
    pins: {
      "COMP +": "PA4",
      "COMP −": ["PA4", "PA3", "PB7", "PB6"],
      "COMP = ": "PA0"
    }
  },
  "External Interrupt": {
    color: "#FF9D07",
    pins: {
      INT1: ["PA4", "PB0"],
      INT0: ["PA0", "PB5"]
    }
  },
  "Timer Clock Source": {
    color: "#F4D620",
    pins: {
      "T1 CLK": ["PA0",        "PA4"],
      "T2 CLK": ["PA0", "PB0", "PA4"],
      "T3 CLK": ["PA0", "PB0", "PA4"],
    }
  },
  "External Crystal Pin": {
    color: "#F4D620",
    pins: {
      XTAL1: "PA7",
      XTAL2: "PA6"
    }
  },
  "Programming Pin": {
    pins: {
      ICPCK: "PA3",
      ICPDA: "PA6",
      RESET: "PA5"
    }
  }
};

const definitions = [
  {
    "name": "PFS173 6 Pin",
    "pinCount": 6,
    "names": [
      "PA4",
      "GND",
      "PA5",
      "PA6",
      "VDD",
      "PA3"
    ],
    tags
  },
  {
    "name": "PFS173 8 Pin",
    "pinCount": 8,
    "names": [
      "VDD",
      "PA7",
      "PA6",
      "PA5",
      "PA3",
      "PA4",
      "PA0",
      "GND",
    ],
    tags
  },
  {
    "name": "PFS173 10 Pin",
    "pinCount": 10,
    "names": [
      "PB7",
      "VDD",
      "PA7",
      "PA6",
      "PA5",
      "PA3",
      "PA4",
      "PA0",
      "GND",
      "PB0",
    ],
    tags
  },
  {
    "name": "PFS173 14 Pin",
    "pinCount": 14,
    "names": [
      "PB5",
      "PB6",
      "PB7",
      "VDD",
      "PA7",
      "PA6",
      "PA5",
      "PA3",
      "PA4",
      "PA0",
      "GND",
      "PB0",
      "PB1",
      "PB2"
    ],
    tags
  },
  {
    "name": "PFS173 16 Pin",
    "pinCount": 16,
    "names": [
      "PB4",
      "PB5",
      "PB6",
      "PB7",
      "VDD",
      "PA7",
      "PA6",
      "PA5",
      "PA3",
      "PA4",
      "PA0",
      "GND",
      "PB0",
      "PB1",
      "PB2",
      "PB3",
    ],
    tags
  },
  {
    "name": "PFS173 20 Pin",
    "pinCount": 20,
    "names": [
      "PB4",
      "PB5",
      "PB6",
      "PB7",
      "PC2",
      "VDD",
      "PC3",
      "PA7",
      "PA6",
      "PA5",
      "PA3",
      "PA4",
      "PA0",
      "PC0",
      "GND",
      "PC1",
      "PB0",
      "PB1",
      "PB2",
      "PB3",
    ],
    tags
  }
]

function getContrastColor(color = "white") {
  const rgb = onecolor(color);
  const brightness = Math.round(((parseInt(rgb.red() * 0xFF) * 299) +
        (parseInt(rgb.green() * 0xFF) * 587) +
        (parseInt(rgb.blue() * 0xFF) * 114)) / 1000);
  return (brightness > 125) ? 'black' : 'white';
}

function nTimes(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

function *reversed(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}

function handlePin(definition, idx, isLeft = true) {
  const key = definition.names[idx];
  const nameStyle = {};

  if (["VCC", "VDD"].includes(key)) {
    nameStyle.background = "red";
    nameStyle.color = getContrastColor("red");
  } else if (["GND", "VSS"].includes(key)) {
    nameStyle.background = "black";
    nameStyle.color = getContrastColor("black");
  }

  const tags = [];

  const tagDefs = !isLeft ? Object.values(definition.tags) : reversed(Object.values(definition.tags));
  for (const tag of tagDefs) {
    const pins = !isLeft ? Object.entries(tag.pins) : reversed(Object.entries(tag.pins));
    const backgroundColor = tag.color ?? "white";
    const fontColor = getContrastColor(backgroundColor);

    const values = [];

    for (let [tagValue, pinKeys] of pins) {
      if (!Array.isArray(pinKeys)) {
        pinKeys = [pinKeys];
      }

      for (const pinKey of pinKeys) {
        if (pinKey === key) {
          values.push(tagValue);
        }
      }
    }
    if (values.length) {
      tags.push({
        value: values.join(", "),
        style: {
          background: backgroundColor,
          color: fontColor
        }
      });
    } else {
      tags.push(null);
    }
  }

  return {
    "number": idx + 1,
    "name": {
      value: key,
      style: nameStyle,
    },
    tags
  };
}

function App() {
  return (
    <>
      <table>
        <tbody>
          {definitions.map((definition, i) => {
            console.assert(definition.pinCount % 2 === 0);

            return <React.Fragment key={i}>
                {nTimes(definition.pinCount / 2).map(i => {
                  const pinLeft = handlePin(definition, i);
                  const pinRight = handlePin(definition, definition.pinCount - i - 1, false);
                  return <tr key={i}>
                    {pinLeft.tags.map((tag, i) => tag === null ? <td key={i} /> : <td
                      key={i}
                      className="badge"
                      style={tag.style}>{tag.value}</td>)}
                    <td className="badge pin-name" style={pinLeft.name.style}>{pinLeft.name.value}</td>
                    <td className="pin-number">{pinLeft.number}</td>

                    {i === 0 && <td className="ic" rowSpan={definition.pinCount / 2}>{definition.name}</td>}

                    <td className="pin-number">{pinRight.number}</td>
                    <td className="badge pin-name" style={pinRight.name.style}>{pinRight.name.value}</td>
                    {pinRight.tags.map((tag, i) => tag === null
                      ? <td key={i} />
                      : <td
                        key={i}
                        className="badge"
                        style={tag.style}>{tag.value}</td>)}
                  </tr>;
                })}
                <tr className="divider"></tr>
            </React.Fragment>;
        })}
      </tbody>
    </table>
    {Object.entries(tags).map(([name, {color}]) => <p key={name} className="badge" style={{
      color: getContrastColor(color),
      background: color,
    }}>
      {name}
    </p>)}
  </>
  );
}

export default App;
