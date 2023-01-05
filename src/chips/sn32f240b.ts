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
   
const ADC = {
  name: "ADC Input Channel Pins",
  color: "#80B600",
};

const PWM_A = {
  name: "Timer PWM A Output Pins",
  color: "#823ff1",
};

const PWM_B = {
  name: "Timer PWM B Output Pins",
  color: "#d52753",
};

const USART0 = {
  name: "USART0",
  color: "#f067f0",
};

const USART1 = {
  name: "USART1",
  color: "#275fe4",
};

const USART2 = {
  name: "USART2",
  color: "#0ab6ff",
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
    name: "SN32F24xB",
    notes: "Single Core 32-bit ARM M0\n48MHz\n8KB SRAM, 64KB Boot ROM\n57 GPIO pins",
    variants: [
        {
        name: "SN32F24xB\nLQFP64\nSingle Core 32-bit ARM M0\n48MHz\n8KB SRAM, 64KB Boot ROM\n57 GPIO pins",
        package: "quad",
        pins: [
            "P2.0",  "P2.1", "P2.2", "P2.3", "P2.4", "P2.5", "P2.6", "P2.7", "P2.8", "P2.9",  "P2.10", "P2.11", "P2.11", "P2.12", "P2.13", "P2.14", "VDDIO1",
            "P0.0",  "P0.1", "P0.0", "P0.3", "P0.4", "P0.5", "P0.6", "P0.7", "P0.8", "P0.9",  "P0.10", "P0.11", "P0.11", "P0.10", "P0.13", "P0.14", "P0.15",
            "VDD", "P1.0", "P1.1", "P1.2", "P1.3", "P1.4", "P1.5", "P1.6", "P1.7", "P1.8", "P1.9",  "P1.10", "P1.11", "P1.11", "P1.11", "P1.13", "P1.14",
            "P1.15", "P3.3", "P3.4", "D+", "D-", "VREG33", "VDD", "VSS", "P3.5", "P3.6", "P3.7", "P3.8", "P3.9", "P3.10", "P3.11", "P2.15"
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
          "SWDIO":      ["P3.5"],
          "RESET":      ["P3.7"],
        }
      },
      {
        ...BOOT,
        pins: {
          "BOOT":       ["P2.2"],
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
          "SDAO":      ["P0.7"],
          "SCL0":      ["P0.8"],
        }
      },
      {
        ...SPI,
        pins: {
          "MISO0":      ["P0.2"],
          "MOSI0":      ["P0.3"],
          "SCK0":       ["P0.4"],
          "SEL0":       ["P0.5"],
        }
      },
      {
        ...USART0,
        pins: {
          "URXD0":      ["P0.10"],
          "UTXD0":      ["P0.11"],
        }
      },
      {
        ...USART1,
        pins: {
          "URXD1":      ["P1.8"],
          "UTXD1":      ["P1.9"],
        }
      },
      {
        ...USART2,
        pins: {
          "URXD2":      ["P0.0"],
          "UTXD2":      ["P0.1"],
        }
      },

      {
        ...ADC,
        pins: {
            "AIN0":      ["P2.0"],
            "AIN1":      ["P2.1"],
            "AIN2":      ["P2.2"],
            "AIN3":      ["P2.3"],
            "AIN4":      ["P2.4"],
            "AIN5":      ["P2.5"],
            "AIN6":      ["P2.6"],
            "AIN7":      ["P2.7"],
            "AIN8":      ["P2.8"],
            "AIN9":      ["P2.9"],
            "AIN10":      ["P2.10"],
            "AIN11":      ["P2.11"],
            "AIN12":      ["P2.12"],
            "AIN13":      ["P2.13"],
            "AIN14":      ["P2.14"],
            "AIN15":      ["P2.15"],

        }
      },
      {
        ...PWM_A,
        pins: {
            "PWM00A":      ["P0.0"],
            "PWM01A":      ["P0.1"],
            "PWM02A":      ["P0.2"],
            "PWM03A":      ["P0.3"],
            "PWM04A":      ["P0.4"],
            "PWM05A":      ["P0.5"],
            "PWM06A":      ["P0.6"],
            "PWM07A":      ["P0.7"],
            "PWM08A":      ["P0.8"],
            "PWM09A":      ["P0.9"],
            "PWM10A":      ["P0.10"],
            "PWM11A":      ["P0.11"],
            "PWM12A":      ["P0.12"],
            "PWM13A":      ["P0.13"],
            "PWM14A":      ["P0.14"],
            "PWM15A":      ["P0.15"],
            "PWM16A":      ["P1.0"],
            "PWM17A":      ["P1.1"],
            "PWM18A":      ["P1.2"],
            "PWM19A":      ["P1.3"],
            "PWM20A":      ["P1.4"],
            "PWM21A":      ["P1.5"],
            "PWM22A":      ["P1.6"],
            "PWM23A":      ["P1.7"],
        }
      },
      {
        ...PWM_B,
        pins: {
            "PWM00B":      ["P1.8"],
            "PWM01B":      ["P1.9"],
            "PWM02B":      ["P1.10"],
            "PWM03B":      ["P1.11"],
            "PWM04B":      ["P1.12"],
            "PWM05B":      ["P1.13"],
            "PWM06B":      ["P1.14"],
            "PWM07B":      ["P1.15"],
            "PWM08B":      ["P2.0"],
            "PWM09B":      ["P2.1"],
            "PWM10B":      ["P2.2"],
            "PWM11B":      ["P2.3"],
            "PWM12B":      ["P2.4"],
            "PWM13B":      ["P2.5"],
            "PWM14B":      ["P2.6"],
            "PWM15B":      ["P2.7"],
            "PWM16B":      ["P2.8"],
            "PWM17B":      ["P2.9"],
            "PWM18B":      ["P2.10"],
            "PWM19B":      ["P2.11"],
            "PWM20B":      ["P2.12"],
            "PWM21B":      ["P2.13"],
            "PWM22B":      ["P2.14"],
            "PWM23B":      ["P2.15"],

        }
      },

    ]
  }
];
