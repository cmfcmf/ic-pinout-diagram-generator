import {
  PULL_UP_DOWN,
  PWM8,
  PWM_TIMER,
  EXTERNAL_INTERRUPT,
  EXTERNAL_CRYSTAL,
  ADC,
  ChipDefinition,
  copyAndChangeName,
} from "./common";

const TIMER = {
  ...PWM_TIMER,
  name: "Timer Input/Output/Capture Pins",
};

const SPECIAL_FUNCTIONS = {
  name: "Special Function Pins",
  color: "#1425e0",
};

const UART = {
  ...SPECIAL_FUNCTIONS,
  name: "UART Pins",
};

const SPI = {
  ...SPECIAL_FUNCTIONS,
  name: "SPI Pins",
};

const TOUCH = {
  ...SPECIAL_FUNCTIONS,
  name: "Touch Pins",
};

const USB = {
  ...SPECIAL_FUNCTIONS,
  name: "USB Pins",
};

const LED = {
  ...SPECIAL_FUNCTIONS,
  name: "LED Driver Pins",
};

const OTHER = {
  ...SPECIAL_FUNCTIONS,
  name: "Other Pins",
};

const ADDR_DATA_BUS = {
  name: "Address/Data Bus Pins",
  color: "#3262a8",
};

export const chips: ChipDefinition[] = [
  {
    name: "CH340x",
    manufacturer: "WCH",
    variants: [
      {
        name: "CH340B\nSOP16-150",
        pins: [
          "GND",  "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "RST#", "nc",
          "CTS#", "DSR#", "RI#",  "DCD#", "DTR#", "RTS#", "TNOW", "VCC"
        ],
      },
      {
        name: "CH340C\nSOP16-150",
        pins: [
          "GND",  "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "nc",   "OUT#",
          "CTS#", "DSR#", "RI#",  "DCD#", "DTR#", "RTS#", "TNOW", "VCC"
        ],
      },
      {
        name: "CH340E\nMSOP10-118",
        pins: [
          "UDP",  "UDM",  "GND",  "RTS#", "CTS#",
          "TNOW", "VCC",  "TXD",  "RXD",  "V33"
        ],
      },
      {
        name: "CH340G\nSOP16-150",
        pins: [
          "GND",  "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "XI",   "XO",
          "CTS#", "DSR#", "RI#",  "DCD#", "DTR#", "RTS#", "TNOW", "VCC"
        ],
      },
      {
        name: "CH340K\nESSOP10-150",
        pins: [
          "UDP",  "UDM",  "GND",  "DTR#", "CTS#",
          "RTS#", "VCC",  "TXD",  "RXD",  "V33",
        ],
        additionalPins: [{ description: "Bottom Pad", pin: "GND" }]
      },
      {
        name: "CH340N\nSOP8-150",
        pins: [
          "UDP",  "UDM",  "GND",  "RTS#",
          "VCC",  "TXD",  "RXD",  "V33"
        ],
      },
      {
        name: "CH340T\nSOP20-209",
        pins: [
          "CKO",  "ACT#", "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "GND",  "XI",  "XO",
          "CTS#", "DSR#", "RI#",  "DCD#", "DTR#", "RTS#", "TNOW", "R232", "VCC", "NOS#"
        ],
      }
    ],
    data: [
    ]
  },
  {
    name: "CH551x",
    manufacturer: "WCH",
    variants: [
      {
        name: "CH551G\nSOP16-150",
        pins: [
          "P3.2", "P1.4", "P1.5", "P1.6", "P1.7", "RST",  "P3.1", "P3.0",
          "P1.1", "P3.3", "P3.4", "P3.6", "P3.7", "GND",  "VCC",  "V33",
        ],
      }
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":         ["P1.1", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.6", "P3.7"],
          "float-input":     ["P1.1", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.6", "P3.7"],
          "push/pull":       ["P1.1", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.6", "P3.7"],
          "open-drain":      ["P1.1", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.6", "P3.7"],
          "quasi-bidir":     ["P1.1", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.6", "P3.7"],
          "pull-down":       ["RST"]
        }
      },
      {
        ...UART,
        pins: {
          "TXD0": ["P3.1"],
          "RXD0": ["P3.0"]
        }
      },
      {
        ...SPI,
        pins: {
          "SCS":    ["P1.4"],
          "SCK":    ["P1.7"],
          "MISO":   ["P1.6"],
          "MOSI":   ["P1.5"]
        }
      },
      {
        ...PWM8,
        pins: {
          "PWM1":   ["P1.5", "P3.0"],
          "PWM2":   ["P3.1", "P3.4"]
        }
      },
      {
        ...TIMER,
        pins: {
          "T0":     ["P3.4"],
          "T2":     ["P1.4"],
          "T2EX":   ["P1.1", "RST"],
          "CAP1":   ["P1.4"],
          "CAP2":   ["P1.1", "RST"]
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...USB,
        pins: {
          "UDP":    ["P3.6"],
          "UDM":    ["P3.7"]
        }
      }
    ]
  },
  {
    name: "CH552x",
    manufacturer: "WCH",
    variants: [
      {
        name: "CH552E\nMSOP10-118",
        pins: [
          "P1.4", "P1.5", "P1.6", "P1.7", "RST",
          "P3.6", "P3.7", "GND",  "VCC",  "V33",
        ],
      },
      {
        name: "CH552G\nSOP16-150",
        pins: [
          "P3.2", "P1.4", "P1.5", "P1.6", "P1.7", "RST",  "P3.1", "P3.0",
          "P1.1", "P3.3", "P3.4", "P3.6", "P3.7", "GND",  "VCC",  "V33",
        ],
      },
      {
        name: "CH552P\nQFN16+1",
        package: "quad",
        pins: [
          "V33",  "P1.5", "P1.4", "P3.2",
          "P1.6", "P1.7", "RST",  "P1.0",
          "P3.1", "P3.0", "P1.1", "P3.3",
          "P3.4", "P3.6", "P3.7", "VCC",
        ],
        additionalPins: [{ description: "Bottom Pad", pin: "GND" }]
      },
      {
        name: "CH552T\nTSSOP20-173",
        pins: [
          "P3.2", "P1.4", "P1.5", "P1.6", "P1.7", "RST",  "P1.0", "P1.1", "P3.1", "P3.0",
          "P3.3", "P3.4", "P3.5", "P3.6", "P3.7", "P1.3", "P1.2", "GND",  "VCC",  "V33",
        ],
      }
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "pull-up":         ["P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7"],
          "float-input":     ["P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7"],
          "push/pull":       ["P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7"],
          "open-drain":      ["P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7"],
          "quasi-bidir":     ["P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7"],
          "pull-down":       ["RST"]
        }
      },
      {
        ...UART,
        pins: {
          "TXD0": ["P1.3", "P3.1"],
          "RXD0": ["P1.2", "P3.0"],
          "TXD1": ["P1.7", "P3.2"],
          "RXD1": ["P1.6", "P3.4"]
        }
      },
      {
        ...SPI,
        pins: {
          "SCS":    ["P1.4"],
          "SCK":    ["P1.7"],
          "MISO":   ["P1.6"],
          "MOSI":   ["P1.5"]
        }
      },
      {
        ...PWM8,
        pins: {
          "PWM1":   ["P1.5", "P3.0"],
          "PWM2":   ["P3.1", "P3.4"]
        }
      },
      {
        ...TIMER,
        pins: {
          "T0":     ["P3.4"],
          "T1":     ["P3.5"],
          "T2":     ["P1.0", "P1.4"],
          "T2EX":   ["P1.1", "RST"],
          "CAP1":   ["P1.0", "P1.4"],
          "CAP2":   ["P1.1", "RST"]
        }
      },
      {
        ...ADC,
        pins: {
          "AIN0":   ["P1.1"],
          "AIN1":   ["P1.4"],
          "AIN2":   ["P1.5"],
          "AIN3":   ["P3.2"]
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...EXTERNAL_CRYSTAL,
        pins: {
          "XI":     ["P1.2"],
          "XO":     ["P1.3"]
        }
      },
      {
        ...USB,
        pins: {
          "UDP":    ["P3.6"],
          "UDM":    ["P3.7"]
        }
      },
      {
        ...TOUCH,
        pins: {
          "TIN0":   ["P1.0"],
          "TIN1":   ["P1.1"],
          "TIN2":   ["P1.4"],
          "TIN3":   ["P1.5"],
          "TIN4":   ["P1.6"],
          "TIN5":   ["P1.7"]
        }
      },
      {
        ...OTHER,
        pins: {
          "VBUS1":  ["P3.2"],
          "VBUS2":  ["P1.1"],
          "UCC1":   ["P1.4"],
          "UCC2":   ["P1.5"]
        }
      }
    ]
  },
  {
    name: "CH558x",
    manufacturer: "WCH",
    variants: [
      {
        name: "CH558T\nSSOP20-209",
        pins: [
          "P1.2", "P1.4", "P1.5", "P1.6", "P1.7", "P5.7", "P3.2", "P3.4", "P4.6", "P4.7",
          "P2.5", "P2.6", "P2.7", "P5.1", "P5.0", "P0.3", "P0.2", "GND",  "VCC",  "V33"
        ],
      },
      {
        name: "CH558L\nLQFP48-7x7",
        package: "quad",
        pins: [
          "P1.6", "P1.7", "P5.7", "P3.0", "P4.5", "P4.4", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6",
          "P3.7", "P4.3", "P4.2", "P4.6", "P4.7", "GND",  "P4.1", "P4.0", "P2.0", "P2.1", "P2.2", "P2.3",
          "P2.4", "P2.5", "P2.6", "P2.7", "P5.5", "P5.4", "P5.1", "P5.0", "P0.7", "P0.6", "P0.5", "P0.4",
          "P0.3", "P0.2", "P0.1", "P0.0", "VCC",  "V33",  "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5"
        ],
      }
    ],
    data: [
      {
        ...PULL_UP_DOWN,
        pins: {
          "float-input":     ["P0.0", "P0.1", "P0.2", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7",
                              "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7",
                              "P2.0", "P2.1", "P2.2", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7",
                              "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7",
                              "P4.0", "P4.1", "P4.2", "P4.3", "P4.4", "P4.5", "P4.6", "P4.7",
                              "P5.0", "P5.1",                 "P5.4", "P5.5",         "P5.7"],
          "push/pull":       ["P0.0", "P0.1", "P0.2", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7",
                              "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7",
                              "P2.0", "P2.1", "P2.2", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7",
                              "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7",
                              "P4.0", "P4.1", "P4.2", "P4.3", "P4.4", "P4.5", "P4.6", "P4.7",
                              "P5.0", "P5.1",                 "P5.4", "P5.5",         "P5.7"],
          "open-drain":      ["P0.0", "P0.1", "P0.2", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7",
                              "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7",
                              "P2.0", "P2.1", "P2.2", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7",
                              "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7",
                              "P4.0", "P4.1", "P4.2", "P4.3", "P4.4", "P4.5", "P4.6", "P4.7",
                              "P5.0", "P5.1",                 "P5.4", "P5.5",         "P5.7"],
          "quasi-bidir":     ["P0.0", "P0.1", "P0.2", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7",
                              "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7",
                              "P2.0", "P2.1", "P2.2", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7",
                              "P3.0", "P3.1", "P3.2", "P3.3", "P3.4", "P3.5", "P3.6", "P3.7",
                              "P4.0", "P4.1", "P4.2", "P4.3", "P4.4", "P4.5", "P4.6", "P4.7",
                              "P5.0", "P5.1",                 "P5.4", "P5.5",         "P5.7"],
          "pull-down":       ["P5.7"]
        }
      },
      {
        ...UART,
        pins: {
          "TXD0":   ["P3.1", "P0.3"],
          "RXD0":   ["P3.0", "P0.2"],
          "TXD1":   ["P4.4", "P2.7"],
          "RXD1":   ["P4.0", "P2.6"],
          "URTS":   ["P0.1"],
          "UCTS":   ["P0.4"],
          "UDCD":   ["P0.7"],
          "UDTR":   ["P0.0"],
          "UDSR":   ["P0.5"],
          "URI":    ["P0.6"]
        }
      },
      {
        ...SPI,
        pins: {
          "SCS":    ["P1.4", "P4.6"],
          "SCK":    ["P1.7", "P4.7"],
          "MISO":   ["P1.6"],
          "MOSI":   ["P1.5"],
          "SCK1":   ["P2.3"],
          "MISO1":  ["P2.2"],
          "MOSI1":  ["P2.1"]
        }
      },
      {
        ...PWM8,
        pins: {
          "PWM1":   ["P2.4", "P4.3"],
          "PWM2":   ["P2.5", "P4.5"],
          "PWM3":   ["P1.2", "P4.2"]
        }
      },
      {
        ...TIMER,
        pins: {
          "T0":     ["P3.4"],
          "T1":     ["P3.5"],
          "T2":     ["P1.0"],
          "T2EX":   ["P1.1", "P2.5"],
          "CAP1":   ["P1.0"],
          "CAP2":   ["P1.1", "P2.5"],
          "CAP3":   ["P1.2", "P4.2"]
        }
      },
      {
        ...ADC,
        pins: {
          "AIN0":   ["P1.0"],
          "AIN1":   ["P1.1"],
          "AIN2":   ["P1.2"],
          "AIN3":   ["P1.3"],
          "AIN4":   ["P1.4"],
          "AIN5":   ["P1.5"],
          "AIN6":   ["P1.6"],
          "AIN7":   ["P1.7"]
        }
      },
      {
        ...EXTERNAL_INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...EXTERNAL_CRYSTAL,
        pins: {
          "XI":     ["P4.6"],
          "XO":     ["P4.7"]
        }
      },
      {
        ...USB,
        pins: {
          "UDP":    ["P5.1"],
          "UDM":    ["P5.0"],
          "HP":     ["P5.5"],
          "HM":     ["P5.5"]
        }
      },
      {
        ...ADDR_DATA_BUS,
        pins: {
          "AD0":    ["P0.0"],
          "AD1":    ["P0.1"],
          "AD2":    ["P0.2"],
          "AD3":    ["P0.3"],
          "AD4":    ["P0.4"],
          "AD5":    ["P0.5"],
          "AD6":    ["P0.6"],
          "AD7":    ["P0.7"],

          "A0":     ["P4.0"],
          "A1":     ["P4.1"],
          "A2":     ["P4.2"],
          "A3":     ["P4.3"],
          "A4":     ["P4.4"],
          "A5":     ["P4.5"],
          "DA6":    ["P3.5"],
          "DA7":    ["P2.7"],
          "A8":     ["P2.0"],
          "A9":     ["P2.1"],
          "A10":    ["P2.2"],
          "A11":    ["P2.3"],
          "A12":    ["P2.4"],
          "A13":    ["P2.5"],
          "A14":    ["P2.6"],
          "A15":    ["P2.7"],
          "~A15":   ["P3.3", "P5.5"],

          "WR":     ["P3.6"],
          "RD":     ["P3.7"],
          "ALE":    ["P5.4"]
        }
      },
      {
        ...LED,
        pins: {
          "LED0":   ["P3.2"],
          "LED1":   ["P3.3"],
          "LED2":   ["P4.0"],
          "LED3":   ["P4.4"],
          "LEDC":   ["P3.4"]
        }
      },
      {
        ...OTHER,
        pins: {
          "RST":    ["P5.7"],
          "TNOW":   ["P2.5"],
          "XA":     ["P5.5"],
          "XB":     ["P5.4"]
        }
      }
    ]
  },
];

chips.push(
  // CH552 and CH554 are identical except for USB Host support.
  copyAndChangeName(chips.find(chip => chip.name === "CH552x")!, "CH552", "CH554"),
);

chips.push(
  // CH558 and CH559 are identical except for USB Host support.
  copyAndChangeName(chips.find(chip => chip.name === "CH558x")!, "CH558", "CH559"),
);