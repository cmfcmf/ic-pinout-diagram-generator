import {
  PULL_UP_DOWN,
  MAXIMUM_CURRENT,
  LCD,
  PWM11,
  PWM_TIMER,
  COMPARATOR,
  EXTERNAL_INTERRUPT,
  CRYSTAL_AND_TIMER_CLOCK_SOURCES,
  PROGRAMMING_PINS,
  ADC,
  TIMER_CLOCK_SOURCES,
} from "./common";

export const chips = [
  {
    manufacturer: "Padauk",
    name: "PFS154",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA5",
          "PA6", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "10 Pin",
        pins: [
          "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0",
        ]
      },
      {
        name: "14 Pin",
        pins: [
          "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2",
        ]
      },
      {
        name: "16 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2", "PB3"
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 5mA":        [              "PA5"                                                                             ],
          "sink: 2mA/6mA":    ["PA7", "PA6",                             "PB7",               "PB4", "PB3",        "PB1"       ],
          "sink: 2mA/10mA":   [                     "PA4", "PA3", "PA0",        "PB6", "PB5",               "PB2",        "PB0"],

          "drive: 0mA":       [              "PA5",                                                                            ],
          "drive: 1.6mA/5mA": ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...LCD,
        pins: {
          "COM3": "PA4",
          "COM4": "PA3",
          "COM2": "PA0",
          "COM1": "PB0",
        }
      },
      {
        ...PWM11,
        pins: {
          PWM2: ["PA5", "PA4", "PA3", "PB3", "PB2"],
          PWM1: ["PB7", "PB6"],
          PWM0: ["PA0", "PB5", "PB4"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2"],
          "T3 PWM": ["PB7", "PB6", "PB5"],
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PB0"],
          INT0: ["PA0"]
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T1 CLK": ["PA0",        "PA4"],
          "T2 CLK": ["PA0", "PB0", "PA4"],
          "T3 CLK": ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD"
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PFS172",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3",
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA6", "PA5", "PB7",
          "PB1", "PA3", "PA4", "GND",
        ]
      },
      {
        name: "10 Pin",
        pins: [
          "VDD", "PA6", "PA5", "PB7", "PB4",
          "PB1", "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "14 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5", "PB7", "PB4", "PB5",
          "PB0", "PB1", "PB3", "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "16 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5", "PB7", "PB4", "PB5", "PB6",
          "PB2", "PB0", "PB1", "PB3", "PA3", "PA4", "PA0", "GND",
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":   ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
          "pull-down": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 22mA":       ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0",        "PB6", "PB5",        "PB3", "PB2", "PB1", "PB0"],
          "sink: 21mA/35mA":  [                                          "PB7",               "PB4"                            ],

          "drive: 11mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0",        "PB6", "PB5",        "PB3", "PB2", "PB1", "PB0"],
          "drive: 12mA":      [              "PA5",                                                                            ],
          "drive: 11mA/23mA": [                                          "PB7",               "PB4"                            ],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2"],
          "T3 PWM": ["PB7", "PB6", "PB5"],
        }
      },
      {
        ...ADC,
        pins: {
          ADC0:  "PB0",
          ADC1:  "PB1",
          ADC2:  "PB2",
          ADC3:  "PB3",
          ADC4:  "PB4",
          ADC5:  "PB5",
          ADC6:  "PB6",
          ADC7:  "PB7",
          ADC8:  "PA3",
          ADC9:  "PA4",
          ADC10: "PA0",
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PA4", "PB0"],
          INT0: ["PA0", "PB5"]
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T1 CLK": ["PA0",        "PA4"],
          "T2 CLK": ["PA0", "PB0", "PA4"],
          "T3 CLK": ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD"
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
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
          "PB4", "PB5", "PB6", "PB7", "PC2", "VDD", "PC3", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "PC0", "GND", "PC1", "PB0", "PB1", "PB2", "PB3",
        ],
      },
      {
        name: "16 Pin QFN",
        package: "quad",
        pins: [
          "PA0", "GND", "PB0", "PB1",
          "PB2", "PB3", "PB4", "PB5",
          "PB6", "PB7", "VDD", "PA7",
          "PA6", "PA5", "PA3", "PA4",
        ],
        additionalPins: [
          { description: "Bottom Pad", pin: "GND" },
          { description: "foo", pin: "PB7" },
        ],
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":         ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
          "pull-down":       [                                                                      "PB3", "PB2",                             "PC1", "PC0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 10mA":      ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0",               "PC1",      ],
          "sink: 30mA":      [                                                                                                  "PC3", "PC2",        "PC0"],
          "sink: 10mA/40mA": [                                                        "PB5", "PB4",                                                       ],

          "drive: 0mA":      [              "PA5",                                                                                                        ],
          "drive: 5mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6",               "PB3", "PB2", "PB1", "PB0", "PC3", "PC2", "PC1", "PC0"],
          "drive: 5mA/20mA": [                                                        "PB5", "PB4",                                                       ],
        }
      },
      {
        ...LCD,
        pins: {
          "COM3": "PB5",
          "COM4": "PB6",
          "COM2": "PB2",
          "COM1": "PB1",
          "COM0": "PB0",
        }
      },
      {
        ...PWM11,
        pins: {
          PWM2: ["PA5",        "PA3",                      "PB5",        "PB3", "PB2",               "PC0"],
          PWM1: [       "PA4",               "PB7", "PB6",                             "PC3"],
          PWM0: [                     "PA0",        "PB6", "PB5", "PB4",                      "PC2"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2"],
          "T3 PWM": ["PB7", "PB6", "PB5"],
        }
      },
      {
        ...ADC,
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
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PA4", "PB0"],
          INT0: ["PA0", "PB5"]
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T1 CLK": ["PA0",        "PA4"],
          "T2 CLK": ["PA0", "PB0", "PA4"],
          "T3 CLK": ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD"
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PMS152",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "10 Pin",
        pins: [
          "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0",
        ]
      },
      {
        name: "14 Pin",
        pins: [
          "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2",
        ]
      },
      {
        name: "16 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2", "PB3"
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 4mA":       [              "PA5",                                                                            ],
          "sink: 14mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0",        "PB6",        "PB4",        "PB2", "PB1", "PB0"],
          "sink: 30mA":      [                                          "PB7",        "PB5",        "PB3",                    ],

          "drive: 0mA":      [              "PA5",                                                                            ],
          "drive: 7mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...PWM11,
        pins: {
          PWM2: ["PA5", "PA3", "PB3", "PB2"],
          PWM1: ["PA4", "PB7", "PB6"],
          PWM0: ["PA0", "PB5", "PB4"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2"],
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PB0", "PA4"],
          INT0: ["PA0", "PB5"],
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T16 CLK": ["PA0",        "PA4"],
          "T2 CLK":  ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD",
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PMS154C",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "10 Pin",
        pins: [
          "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0",
        ]
      },
      {
        name: "14 Pin",
        pins: [
          "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2",
        ]
      },
      {
        name: "16 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2", "PB3"
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 5mA":        [              "PA5",                                                                            ],
          "sink: 2mA/6mA":    ["PA7", "PA6",                             "PB7",               "PB4", "PB3",        "PB1", "PB0"],
          "sink: 2mA/10mA":   [                     "PA4", "PA3", "PA0",        "PB6", "PB5",               "PB2"              ],

          "drive: 0mA":       [              "PA5",                                                                            ],
          "drive: 1.6mA/5mA": ["PA7", "PA6",        "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
        }
      },
      {
        ...LCD,
        pins: {
          "COM3": "PA4",
          "COM4": "PA3",
          "COM2": "PA0",
          "COM1": "PB0",
        }
      },
      {
        ...PWM11,
        pins: {
          PWM2: ["PA5", "PA3", "PB3", "PB2"],
          PWM1: ["PA4", "PB7", "PB6"],
          PWM0: ["PA0", "PB5", "PB4"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2"],
          "T3 PWM": ["PB7", "PB6", "PB5"],
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PB0"],
          INT0: ["PA0"],
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T16 CLK": ["PA0",        "PA4"],
          "T2 CLK":  ["PA0", "PB0", "PA4"],
          "T3 CLK":  ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD",
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PMS171B",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
      {
        name: "10 Pin",
        pins: [
          "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0",
        ]
      },
      {
        name: "14 Pin",
        pins: [
          "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2",
        ]
      },
      {
        name: "16 Pin",
        pins: [
          "PB4", "PB5", "PB6", "PB7", "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND", "PB0", "PB1", "PB2", "PB3"
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":   ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6", "PB5", "PB4", "PB3", "PB2", "PB1", "PB0"],
          "pull-down": [                                                 "PB6",               "PB3"                     ],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 16mA":      ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0", "PB7", "PB6",               "PB2", "PB2", "PB1"       ],
          "sink: 16mA/38mA": [                                                        "PB5", "PB4"                            ],
          "sink: 135mA":     [                                                                                           "PB0"],

          "drive: 0mA":      [              "PA5",                                                                       "PB0"],
          "drive: 6mA":      ["PA7", "PA6",        "PA4", "PA3", "PA0",        "PB6",               "PB3", "PB2", "PB1"       ],
          "drive: 6mA/20mA": [                                                        "PB5", "PB4"                            ],
          "drive: 135mA":    [                                          "PB7",                                                ],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA3", "PB4", "PB2", "PB0"],
          "T3 PWM": ["PB7", "PB6", "PB5"],
        }
      },
      {
        ...ADC,
        pins: {
          //ADC0: "PB0",
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
          AREF: "PB1"
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PB7", "PB6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT1: ["PB0", "PA4"],
          INT0: ["PA0", "PB5"],
        }
      },
      {
        ...CRYSTAL_AND_TIMER_CLOCK_SOURCES,
        pins: {
          "T16 CLK": ["PA0",        "PA4"],
          "T2 CLK":  ["PA0", "PB0", "PA4"],
          "T3 CLK":  ["PA0", "PB0", "PA4"],
          XTAL1: "PA7",
          XTAL2: "PA6"
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD",
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PMS150C",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 6mA/26.5mA":  [              "PA5",                    ],
          "sink: 5mA/14.5mA":  ["PA7", "PA6",        "PA4", "PA3", "PA0"],

          "drive: 0mA":        [              "PA5",                    ],
          "drive: 3.5mA/12mA": ["PA7", "PA6",        "PA4", "PA3", "PA0"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA4", "PA3"],
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PA7", "PA6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT0: ["PA0"],
        }
      },
      {
        ...TIMER_CLOCK_SOURCES,
        pins: {
          "T16 CLK": ["PA4", "PA0"],
          "T2 CLK":  ["PA4", "PA0"],
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD",
        }
      }
    ]
  },
  {
    manufacturer: "Padauk",
    name: "PMS150G",
    variants: [
      {
        name: "6 Pin",
        pins: [
          "PA4", "GND", "PA6",
          "PA5", "VDD", "PA3"
        ]
      },
      {
        name: "8 Pin",
        pins: [
          "VDD", "PA7", "PA6", "PA5",
          "PA3", "PA4", "PA0", "GND",
        ]
      },
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":   ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0"],
          "pull-down": ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0"],
        }
      },
      {
        ...MAXIMUM_CURRENT,
        pins: {
          "sink: 21mA":      ["PA7", "PA6", "PA5", "PA4", "PA3", "PA0"],

          "drive: 0mA/13mA": [              "PA5",                    ],
          "drive: 13mA":     ["PA7", "PA6",        "PA4", "PA3", "PA0"],
        }
      },
      {
        ...PWM_TIMER,
        pins: {
          "T2 PWM": ["PA4", "PA3"],
        }
      },
      {
        ...COMPARATOR,
        pins: {
          "COMP +": "PA4",
          "COMP −": ["PA4", "PA3", "PA7", "PA6"],
          "COMP = ": "PA0"
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          INT0: ["PA0"],
        }
      },
      {
        ...TIMER_CLOCK_SOURCES,
        pins: {
          "T16 CLK": ["PA4", "PA0"],
          "T2 CLK":  ["PA4", "PA0"],
        }
      },
      {
        ...PROGRAMMING_PINS,
        pins: {
          ICPCK: "PA3",
          ICPDA: "PA6",
          ICVPP: "PA5",
          ICVDD: "VDD",
        }
      }
    ]
  },
];

chips.push({
  // PMS150C and PMS15A are identical except for their ROM size.
  ...chips.find((chip) => chip.name === "PMS150C"),
  name: "PMS15A",
});

chips.push({
  // PMS150G and PMS15B are identical except for their ROM size.
  ...chips.find((chip) => chip.name === "PMS150G"),
  name: "PMS15B",
});
