const chips = [
  {
    name: "PFS173",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA5",
          "PA6", "VDD", "PA3"
        ],
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ],
      },
      {
        name: "10 Pin",
        pins: [
          "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0",
        ],
      },
      {
        name: "14 Pin",
        pins: [
          "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2"
        ],
      },
      {
        name: "16 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2", "PB3",
        ],
      },
      {
        name: "20 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "PC2", "VDD", "PC3", "PA7", "PA6",
          "PA5", "PA3", "PA4", "PA0", "PC0", "GND", "PC1", "PB0", "PB1", "PB2", "PB3",
        ],
      }
    ],
    data: {
      "Pull-up / Pull-down Availability": {
        color: "#FFC869",
        pins: {
          "pull-up":         ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
          "pull-down":       [                                                                      "PB3", "PB2",                             "PC1", "PC0"],
        }
      },
      "Maximum current": {
        color: "#FFC869",
        pins: {
          "sink: 10mA":      ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0",               "PC1",      ],
          "sink: 30mA":      [                                                                                                  "PC3", "PC2",        "PC0"],
          "sink: 10mA/40mA": [                                                        "PB5", "PB4",                                                       ],

          "drive: 0mA":      [              "PA5",                                                                                                        ],
          "drive: 5mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
          "drive: 5mA/20mA": [                                                        "PB5", "PB4",                                                       ],
        }
      },
      "Pins that can be set to VDD/2 (\"VDD/2 LCD Bias Voltage Generator\")": {
        color: "#E5CDA2",
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
      "External Crystal Pins and Timer Clock Source": {
        color: "#F4D620",
        pins: {
          "T1 CLK": ["PA0",        "PA4"],
          "T2 CLK": ["PA0", "PB0", "PA4"],
          "T3 CLK": ["PA0", "PB0", "PA4"],
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
    }
  }
];

export default chips;