import {
  ChipDefinition,
} from "./common";

const PWR_3V3 = {
  name: "Power Pins (I/O)",
  color: "#d00000",
};

const PWR_1V1 = {
  name: "Power Pins (Core)",
  color: "#700000",
};

const DEBUG = {
  name: "Debug Pins",
  color: "#e09050",
};

const BOOT = {
  name: "FLASH Boot Pins",
  color: "#e08020",
};

const USB = {
  name: "USB Pins",
  color: "#0000ff",
};
   
const ADC = {
  name: "ADC",
  color: "#80B600",
};
  
   
export const chips: ChipDefinition[] = [
  {
    manufacturer: "Raspberry Pi",
    name: "RP2040",
    notes: "2 Core 32-bit ARM M0+\n133MHz\n264KB SRAM, 16KB Boot ROM\n30 GPIO pins\nExternal QSPI Flash 64MB max",
    variants: [
        {
        name: "RP2040\nQFN56-7x7 @0.4\n2 Core 32-bit ARM M0+\n133MHz\n264KB SRAM, 16KB Boot ROM\n30 GPIO pins\nExternal QSPI Flash 64MB max",
        package: "quad",
        pins: [
            "VDDIO",  "GPIO00", "GPIO01", "GPIO02", "GPIO03", "GPIO04", "GPIO05", "GPIO06", "GPIO07", "VDDIO",  "GPIO08", "GPIO09", "GPIO10", "GPIO11",
            "GPIO12", "GPIO13", "GPIO14", "GPIO15", "TESTEN", "XI",     "XO",     "VDDIO",  "Vcore",  "SWCLK",  "SWDIO",  "RUN",    "GPIO16", "GPIO17",
            "GPIO18", "GPIO19", "GPIO20", "GPIO21", "VDDIO",  "GPIO22", "GPIO23", "GPIO24", "GPIO25", "GPIO26", "GPIO27", "GPIO28", "GPIO29", "VDDIO",
            "AGND",   "VregIN", "VregOUT","USB_DM", "USB_DP", "USB_VDD","VDDIO",  "Vcore",  "QSPI_D3","QSPI_CLK","QSPI_D0","QSPI_D2","QSPI_D1","QSPI_CSn"  
          ],
          additionalPins: [{ description: "Bottom Pad", pin: "GND" }]
        }
    ],
    data: [
      {
        ...PWR_3V3,
        pins: {
          "3V3":        ["VDDIO", "USB_VDD", "VregIN"],
        }
      },
      {
        ...PWR_1V1,
        pins: {
          "1V1":        ["Vcore", "VregOUT"],
        }
      },
      {
        ...DEBUG,
        pins: {
          "DEBUG":      ["SWCLK", "SWDIO"],
        }
      },
      {
        ...BOOT,
        pins: {
          "QSPI_CSn":   ["QSPI_CSn"],
          "QSPI_CLK":   ["QSPI_CLK"],
          "QSPI_D3":    ["QSPI_D3"],
          "QSPI_D2":    ["QSPI_D2"],
          "QSPI_D1":    ["QSPI_D1"],
          "QSPI_D0":    ["QSPI_D0"],
        }
      },
      {
        ...USB,
        pins: {
          "USB D+":     ["USB_DP"],
          "USB D-":     ["USB_DM"],
        }
      },
      {
        ...ADC,
        pins: {
            "ADC0":      ["GPIO26"],
            "ADC1":      ["GPIO27"],
            "ADC2":      ["GPIO28"],
            "ADC3":      ["GPIO29"],
        }
      },
    ]
  }
];
