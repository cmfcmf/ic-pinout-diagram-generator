import {
  ChipDefinition,
} from "./common";

const PWR_3V3 = {
  name: "Power Pins",
  color: "#d00000",
};

const DEBUG = {
  name: "Debug Pins",
  color: "#e09050",
};

const BOOT = {
  name: "Bootloader Jump Pin",
  color: "#e08020",
};

const USB = {
  name: "USB Pins",
  color: "#0000ff",
};

const PWM = {
  name: "Timer PWM Output Pins",
  color: "#d52753",
};

const SPI = {
  name: "SPI0",
  color: "#ce33c0",
};

const I2C = {
  name: "I2C0",
  color: "#df631c",
};

   
export const chips: ChipDefinition[] = [
  {
    manufacturer: "Sonix",
    name: "SN32F26x",
    notes: "Single Core 32-bit ARM M0\n48MHz\n2KB SRAM, 30KB Boot ROM\n42 GPIO pins",
    variants: [
        {
        name: "SN32F24xB\nLQFP48\nSingle Core 32-bit ARM M0\n48MHz\n2KB SRAM, 30KB Boot ROM\n42 GPIO pins",
        package: "quad",
        pins: [
            "P2.0", "P2.1", "P2.2", "P0.0",  "P0.1", "P0.0", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7", "P0.8",
            "P0.9", "P0.10", "P0.11", "P0.11", "P0.10", "P0.13", "P0.14", "P0.15", "P3.0", "P3.1", "P3.2", "P3.3", "P3.4",
            "P3.5", "P3.6", "P3.7", "P3.8", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7", "P2.8", "P2.9",  "P2.10",
            "P1.5", "P1.4", "P1.3", "P1.2", "P1.1", "P1.0", "VDDIO1", "VDD", "VREG33", "D+", "D-","VSS"
          ],
        }
    ],
    data: [
      {
        ...PWR_3V3,
        pins: {
          "3V3":        ["VDDIO1", "VDD", "VREG33"],
        }
      },
      {
        ...DEBUG,
        pins: {
          "SWCLK":      ["P3.6"],
          "SWDIO":      ["P3.7"],
          "RESET":      ["P3.8"],
        }
      },
      {
        ...BOOT,
        pins: {
          "BOOT":       ["P3.5"],
        }
      },
      {
        ...USB,
        pins: {
          "USB D+":     ["D+"],
          "USB D-":     ["D-"],
        }
      },
      {
        ...I2C,
        pins: {
          "SDAO":      ["P0.9"],
          "SCL0":      ["P0.8"],
        }
      },
      {
        ...SPI,
        pins: {
          "MISO0":      ["P1.4"],
          "MOSI0":      ["P1.5"],
          "SCK0":       ["P1.3"],
          "SEL0":       ["P1.2"],
        }
      },
      
      {
        ...PWM,
        pins: {
            "PWM00":      ["P0.0"],
            "PWM01":      ["P0.1"],
            "PWM02":      ["P0.2"],
            "PWM03":      ["P0.3"],
            "PWM04":      ["P0.4"],
            "PWM05":      ["P0.5"],
            "PWM06":      ["P0.6"],
            "PWM07":      ["P0.7"],
            "PWM08":      ["P0.8"],
            "PWM09":      ["P0.9"],
            "PWM10":      ["P0.10"],
            "PWM11":      ["P0.11"],
            "PWM12":      ["P0.12"],
            "PWM13":      ["P0.13"],
            "PWM14":      ["P0.14"],
            "PWM15":      ["P0.15"],
            "PWM16":      ["P3.0"],
            "PWM17":      ["P3.1"],
            "PWM18":      ["P3.2"],
            "PWM19":      ["P3.3"],
            "PWM20":      ["P3.4"],
            "PWM21":      ["P3.5"],
            "PWM22":      ["P3.6"],
        }
      },
    ]
  }
];
