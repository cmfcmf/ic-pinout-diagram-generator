import {
  PWM8,
  PWM_TIMER,
  ADC,
  ChipDefinition,
} from "./common";

const TIMER = {
  ...PWM_TIMER,
  name: "Timer Input/Output/Capture Pins",
};

const SPECIAL_FUNCTIONS = {
  name: "Special Function Pins",
  color: "#1425e0",
};

const SPI = {
  ...SPECIAL_FUNCTIONS,
  name: "SPI Pins",
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
  color: "#d000d0",
};

const USB = {
  name: "USB Pins",
  color: "#0000ff",
};

const UART = {
  name: "Serial Pins",
  color: "#3080f0",
};

const CRYSTAL = {
  name: "Crystal Pins",
  color: "#ff8000",
};

const INTERRUPT = {
  name: "Interrupt Pins",
  color: "#F4D620",
};

export const chips: ChipDefinition[] = [
  {
    name: "CH340 CH340E CH340K CH340B CH340C CH340G CH340T (7 variants)",
    manufacturer: "WCH",
    notes: "CH340N (SOP8-150)\nCH340E (MSOP10-118)\nCH340K (ESSOP10-15)\nCH340B CH340C CH340G (SOP16-150)\nCH340T (SOP20-209)",
    variants: [
      {
        name: "CH340N\nSOP8-150",
        pins: [
          "UDP",  "UDM",  "GND",  "RTSn",
          "VCC",  "TXD",  "RXD",  "V33"
        ],
      },
      {
        name: "CH340E\nMSOP10-118",
        pins: [
          "UDP",  "UDM",  "GND",  "RTSn", "CTSn",
          "TNOW", "VCC",  "TXD",  "RXD",  "V33"
        ],
      },
      {
        name: "CH340K\nESSOP10-150",
        pins: [
          "UDP",  "UDM",  "GND",  "DTRn", "CTSn",
          "RTSn", "VCC",  "TXD",  "RXD",  "V33",
        ],
        additionalPins: [{ description: "Bottom Pad", pin: "GND" }]
      },
      {
        name: "CH340B CH340C CH340G\nCH340B\nCH340C\nCH340G\nSOP16-150",
        pins: [
          "GND",  "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "XI*", "XO*",
          "CTSn", "DSRn", "RIn",  "DCDn", "DTRn", "RTSn", "TNOW", "VCC"
        ],
      },
      {
        name: "CH340T\nSOP20-209",
        pins: [
          "CKO",  "ACTn", "TXD",  "RXD",  "V33",  "UDP",  "UDM",  "GND",  "XI",  "XO",
          "CTSn", "DSRn", "RIn",  "DCDn", "DTRn", "RTSn", "TNOW", "R232", "VCC", "NOSn"
        ],
      }
    ],
    data: [
      {
        ...UART,
        pins: {
          "Serial": ["TXD", "RXD", "RTSn", "CTSn", "DCDn", "DTRn", "DSRn", "RIn"],
        },
      },
      {
        ...USB,
        pins: {
          "USB D+":   ["UDP"],
          "USB D-":   ["UDM"],
        }
      },
      {
        name: "CH340B only",
        color: "#d000d0",
        pins: {
          "CH340B RSTn ":  ["XI*"],
          "CH340B nc   ":  ["XO*"],
        }
      },
      {
        name: "CH340C only",
        color: "#d000d0",
        pins: {
          "CH340C nc   ":  ["XI*"],
          "CH340C OUTn ":  ["XO*"],
        }
      },
      {
        name: "CH340G only",
        color: "#d000d0",
        pins: {
          "CH340G XI   ":  ["XI*"],
          "CH340G XO   ":  ["XO*"],
        }
      },
    ]
  },
  {
    name: "CH552E CH554E (MSOP10-118 - 2 variants) ",
    manufacturer: "WCH",
    notes: "CH552E can only do USB Device\nCH554E can also do USB Host",
    variants: [
      {
        name: "CH552E CH554E\nMSOP10-118",
        pins: [
          "P1.4", "P1.5", "P1.6", "P1.7", "RST",
          "P3.6", "P3.7", "GND",  "VCC",  "V33",
        ],
      },
    ],
    data: [
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
        ...INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...CRYSTAL,
        pins: {
          "XI":     ["P1.2"],
          "XO":     ["P1.3"]
        }
      },
      {
        ...USB,
        pins: {
          "USB D+":    ["P3.6"],
          "USB D-":    ["P3.7"]
        }
      },
      {
        name: "Touch Input Pins",
        color: "#d000d0",
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
    name: "CH551G CH552G CH554G (SOP16 150) (3 variants) ",
    manufacturer: "WCH",
    notes: "CH551G does not have UART1, ADC, Touch, USB-C and has less Flash & XRAM\nCH552G has UART1, ADC, Touch, USB-C and more Flash and XRAM\nCH554G same as CH552G and can also do USB Host",
    variants: [
      {
        name: "CH551G CH552G CH554G\nCH551G\nCH552G\nCH554G\nSOP16-150",
        pins: [
          "P3.2", "P1.4", "P1.5", "P1.6", "P1.7", "RST",  "P3.1", "P3.0",
          "P1.1", "P3.3", "P3.4", "P3.6", "P3.7", "GND",  "VCC",  "V33",
        ],
      }
    ],
    data: [
      {
        ...UART,
        pins: {
          "TXD0": ["P3.1"],
          "RXD0": ["P3.0"],
          "CH552/4 TXD1": ["P1.7", "P3.2"],
          "CH552/4 RXD1": ["P1.6", "P3.4"]
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
        ...INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...USB,
        pins: {
          "USB D+":    ["P3.6"],
          "USB D-":    ["P3.7"]
        }
      },
      {
        name: "ADC Input Channel (CH552/4 only)",
        color: "#95B600",
        pins: {
          "CH552/4 AIN0":   ["P1.1"],
          "CH552/4 AIN1":   ["P1.4"],
          "CH552/4 AIN2":   ["P1.5"],
          "CH552/4 AIN3":   ["P3.2"]
        }
      },
      {
        name: "Touch Input Pins (CH552/4 only)",
        color: "#d000d0",
        pins: {
          "CH552/4 TIN0":   ["P1.0"],
          "CH552/4 TIN1":   ["P1.1"],
          "CH552/4 TIN2":   ["P1.4"],
          "CH552/4 TIN3":   ["P1.5"],
          "CH552/4 TIN4":   ["P1.6"],
          "CH552/4 TIN5":   ["P1.7"],
        }
      },
      {
        name: "USB-C (CH552/4 only)",
        color: "#d000d0",
        pins: {
          "CH552/4 VBUS1":  ["P3.2"],
          "CH552/4 VBUS2":  ["P1.1"],
          "CH552/4 UCC1":   ["P1.4"],
          "CH552/4 UCC2":   ["P1.5"]
        }
      },
    ]
  },
  {
    name: "CH552T CH554T (TSSOP20-173) (2 variants) ",
    manufacturer: "WCH",
    notes: "CH552T can only do USB Device\nCH554T can also do USB Host",
    variants: [
      {
        name: "CH552T CH554T\nCH552T\nCH554T\nTSSOP20-173",
        pins: [
          "P3.2", "P1.4", "P1.5", "P1.6", "P1.7", "RST",  "P1.0", "P1.1", "P3.1", "P3.0",
          "P3.3", "P3.4", "P3.5", "P3.6", "P3.7", "P1.3", "P1.2", "GND",  "VCC",  "V33",
        ],
      }
    ],
    data: [
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
        ...INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...CRYSTAL,
        pins: {
          "XI":     ["P1.2"],
          "XO":     ["P1.3"]
        }
      },
      {
        ...USB,
        pins: {
          "USB D+":    ["P3.6"],
          "USB D-":    ["P3.7"]
        }
      },
      {
        name: "Touch Input Pins",
        color: "#d000d0",
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
        name: "USB-C",
        color: "#d000d0",
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
    name: "CH558T CH559T (SSOP20-209) (2 variants)",
    manufacturer: "WCH",
    notes: "CH558T & CH559T (SSOP20-209)\n- CH558 can only do USB Device\n- CH559 can also do USB Host x2",
    variants: [
      {
        name: "CH558T CH559T\nCH558T\nCH559T\nSSOP20-209",
        pins: [
          "P1.2", "P1.4", "P1.5", "P1.6", "P1.7", "P5.7", "P3.2", "P3.4", "P4.6", "P4.7",
          "P2.5", "P2.6", "P2.7", "P5.1", "P5.0", "P0.3", "P0.2", "GND",  "VCC",  "V33"
        ],
      },
    ],
    data: [
      {
        ...UART,
        pins: {
          "TXD0":   ["P3.1", "P0.3"],
          "RXD0":   ["P3.0", "P0.2"],
          "TXD1":   ["P4.4", "P2.7"],
          "RXD1":   ["P4.0", "P2.6"],
          "URTSn":  ["P0.1"],
          "UCTSn":  ["P0.4"],
          "UDCDn":  ["P0.7"],
          "UDTRn":  ["P0.0"],
          "UDSRn":  ["P0.5"],
          "URIn":   ["P0.6"]
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
        ...INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...CRYSTAL,
        pins: {
          "XI":     ["P4.6"],
          "XO":     ["P4.7"]
        }
      },
      {
        ...USB,
        pins: {
          "USB D+": ["P5.1"],
          "USB D-": ["P5.0"],
          "HP+":    ["P5.5"],
          "HM-":    ["P5.5"]
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
  {
    name: "CH558L CH559L (LQFP48-7x7) (2 variants)",
    manufacturer: "WCH",
    notes: "CH558L & CH559L (LQFP48-7x7)\n- CH558 can only do USB Device\n- CH559 can also do USB Host x2",
    variants: [
      {
        name: "CH558L CH559L\nCH558L\nCH559L\nLQFP48-7x7",
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
        ...UART,
        pins: {
          "TXD0":   ["P3.1", "P0.3"],
          "RXD0":   ["P3.0", "P0.2"],
          "TXD1":   ["P4.4", "P2.7"],
          "RXD1":   ["P4.0", "P2.6"],
          "URTSn":  ["P0.1"],
          "UCTSn":  ["P0.4"],
          "UDCDn":  ["P0.7"],
          "UDTRn":  ["P0.0"],
          "UDSRn":  ["P0.5"],
          "URIn":   ["P0.6"]
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
        ...INTERRUPT,
        pins: {
          "INT0":   ["P3.2"],
          "INT1":   ["P3.3"]
        }
      },
      {
        ...CRYSTAL,
        pins: {
          "XI":     ["P4.6"],
          "XO":     ["P4.7"]
        }
      },
      {
        ...USB,
        pins: {
          "USB D+": ["P5.1"],
          "USB D-": ["P5.0"],
          "HP+":    ["P5.5"],
          "HM-":    ["P5.5"]
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
