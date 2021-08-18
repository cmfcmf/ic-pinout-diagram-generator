import {
  ChipDefinition,
} from "./common";

const BOOT = {
  name: "Boot/Download Pins",
  color: "#e08020",
};

const UART = {
  name: "UART (Soft)",
  color: "#3080f0",
};

const I2C_SPI = {
  name: "I2C/SPI (Soft)",
  color: "#3080f0",
};
  
const PWM = {
  name: "PWM/Timer/etc",
  color: "#98b600",
};

const ADC = {
  name: "ADC Sigma-Delta (Soft)",
  color: "#80B600",
};
  
const VGA = {
  name: "VGA",
  color: "#204080",
};
  
const VIDEO = {
  name: "Composite Video",
  color: "#504080",
};
    
const AUDIO = {
  name: "Audio",
  color: "#704080",
};
      
      
export const chips: ChipDefinition[] = [
  {
    manufacturer: "Parallax-P1",
    name: "Propeller P1 P8X32A",
    notes: "8 Core 32-bit CPU\n80MHz-104MHz 160-208 MIPs\n48KB SRAM, 32KB Boot ROM\n32 I/O pins",
    variants: [
        {
        name: "P8X32A\nDIP-40 600mil\n-- Parallax Propeller P1 --\n8 Core 32-bit CPU\n80MHz-104MHz 160-208 MIPs\n48KB SRAM, 32KB Boot ROM\n32 I/O pins",
        pins: [
          "P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07", "GND", "BOEn", "RESn", "3V3", "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
          "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23", "GND", "XI",   "XO",   "3V3", "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"
          ]
        },
        {
        name: "P8X32A\nLQFP44-10x10\n-- Parallax Propeller P1 --\n8 Core 32-bit CPU\n80MHz-104MHz 160-208 MIPs\n48KB SRAM, 32KB Boot ROM\n32 I/O pins",
        package: "quad",
        pins: [
          "P04", "P05", "P06", "P07", "GND", "BOEn", "RESn", "3V3", "P08", "P09", "P10",
          "P11", "P12", "P13", "P14", "P15", "GND",  "3V3",  "P16", "P17", "P18", "P19",
          "P20", "P21", "P22", "P23", "GND", "XI",   "XO",   "3V3", "P24", "P25", "P26",
          "P27", "P28", "P29", "P30", "P31", "GND",  "3V3",  "P00", "P01", "P02", "P03"
        ]
      }
    ],
    data: [
      {
        ...BOOT,
        pins: {
          "RXD":           ["P31"],
          "TXD":           ["P30"],
          "SDA":           ["P29"],
          "SCL":           ["P28"]
        }
      },
      {
        ...UART,
        pins: {
            "TXD/RXD":   ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07",
                          "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
						  "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23",
						  "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"]
          }
      },
      {
        ...I2C_SPI,
        pins: {
            "I2C/SPI":   ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07",
                          "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
						  "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23",
						  "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"]
        }
      },
      {
        ...PWM,
        pins: {
            "PWM":       ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07",
                          "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
						  "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23",
						  "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"]
        }
      },
      {
        ...ADC,
        pins: {
            "ADC":       ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07",
                          "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
						  "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23",
						  "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"]
        }
      },
      {
        ...AUDIO,
        pins: {
            "Audio":     ["P00", "P01", "P02", "P03", "P04", "P05", "P06", "P07",
                          "P08", "P09", "P10", "P11", "P12", "P13", "P14", "P15",
						  "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23",
						  "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31"]
        }
      },
      {
        ...VGA,
        pins: {
            "VGA0-V":   ["P00"],
            "VGA0-H":   ["P01"],
            "VGA0-Ba":  ["P02"],
            "VGA0-Bb":  ["P03"],
            "VGA0-Ga":  ["P04"],
            "VGA0-Gb":  ["P05"],
            "VGA0-Ra":  ["P06"],
            "VGA0-Rb":  ["P07"],
  
            "VGA1-V":   ["P08"],
            "VGA1-H":   ["P09"],
            "VGA1-Ba":  ["P10"],
            "VGA1-Bb":  ["P11"],
            "VGA1-Ga":  ["P12"],
            "VGA1-Gb":  ["P13"],
            "VGA1-Ra":  ["P14"],
            "VGA1-Rb":  ["P15"],
  
            "VGA2-V":   ["P16"],
            "VGA2-H":   ["P17"],
            "VGA2-Ba":  ["P18"],
            "VGA2-Bb":  ["P19"],
            "VGA2-Ga":  ["P20"],
            "VGA2-Gb":  ["P21"],
            "VGA2-Ra":  ["P22"],
            "VGA2-Rb":  ["P23"],
  
            "VGA3-V":   ["P24"],
            "VGA3-H":   ["P25"],
            "VGA3-Ba":  ["P26"],
            "VGA3-Bb":  ["P27"],
            "VGA3-Ga":  ["P28"],
            "VGA3-Gb":  ["P29"],
            "VGA3-Ra":  ["P30"],
            "VGA3-Rb":  ["P31"]
          }
      },
      {
        ...VIDEO,
        pins: {
          "Video-0a":   ["P00"],
          "Video-0b":   ["P01"],
          "Video-0c":   ["P02"],

          "Video-1a":   ["P04"],
          "Video-1b":   ["P05"],
          "Video-1c":   ["P06"],

          "Video-2a":   ["P08"],
          "Video-2b":   ["P09"],
          "Video-2c":   ["P10"],

          "Video-3a":   ["P12"],
          "Video-3b":   ["P13"],
          "Video-3c":   ["P14"],

          "Video-4a":   ["P16"],
          "Video-4b":   ["P17"],
          "Video-4c":   ["P18"],

          "Video-5a":   ["P20"],
          "Video-5b":   ["P21"],
          "Video-5c":   ["P22"],
 
          "Video-6a":   ["P24"],
          "Video-6b":   ["P25"],
          "Video-6c":   ["P26"],

          "Video-7a":   ["P28"],
          "Video-7b":   ["P29"],
          "Video-7c":   ["P30"]
        }
      },
    ]
  }
];
