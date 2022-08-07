import { ChipDefinition } from "./common";

const PWR_3V3 = {
  name: "Power",
  color: "#ff2e3f",
};

const DEBUG = {
  name: "SWD",
  color: "#ff6480",
};

const BOOT = {
  name: "Boot",
  color: "#ffcfab",
};

const UART1 = {
  name: "UART1",
  color: "#275fe4",
};

const UART2 = {
  name: "UART2",
  color: "#0ab6ff",
};

const SPI1 = {
  name: "SPI1",
  color: "#ce33c0",
};

const SPI2 = {
  name: "SPI2",
  color: "#f067f0",
};

const I2C1 = {
  name: "I2C1",
  color: "#df631c",
};

const I2C2 = {
  name: "I2C2",
  color: "#ffa023",
};

const ADC = {
  name: "ADC",
  color: "#1fc255",
};

const CLOCKS = {
  name: "Clocks",
  color: "#823ff1",
};

const WAKEUP = {
  name: "Wake-Up",
  color: "#d52753",
};

export const chips: ChipDefinition[] = [
  {
    name: "STM32G0xxFx",
    variants: [
      {
        pins: [
          "PB7/PB8",
          "PC14/PB9",
          "PC15",
          "VDD/VDDA",
          "VSS/VSSA",
          "NRST",
          "PA0",
          "PA1",
          "PA2",
          "PA3",
          "PA4",
          "PA5",
          "PA6",
          "PA7",
          "PB0/PB1/PB2/PA8",
          "PA11[PA9]",
          "PA12[PA10]",
          "PA13",
          "PA14/PA15",
          "PB3/PB4/PB5/PB6"
        ],
      },
    ],
    data: [
      {
        ...ADC,
        pins: {
          "ADC0": ["PA0"],
          "ADC1": ["PA1"],
          "ADC2": ["PA2"],
          "ADC3": ["PA3"],
          "ADC4": ["PA4"],
          "ADC5": ["PA5"],
          "ADC6": ["PA6"],
          "ADC7": ["PA7"],
          "ADC8-10": ["PB0/PB1/PB2/PA8"],
          "ADC11": ["PB7/PB8"],
        }
      },
      {
        ...UART1,
        pins: {
          "RX": ["PB7/PB8"],
          "TX": ["PA11[PA9]", "PB3/PB4/PB5/PB6"],
        }
      },
      {
        ...UART2,
        pins: {
          "RX": ["PA3", "PA14/PA15"],
          "TX": ["PA2", "PA14/PA15"],
        }
      },
      {
        ...SPI1,
        pins: {
          "CLK": ["PA1", "PA5", "PB3/PB4/PB5/PB6"],
          "MISO": ["PA6", "PA11[PA9]", "PB3/PB4/PB5/PB6"],
          "MOSI": ["PA2", "PA7", "PA11[PA9]", "PA12[PA10]", "PB3/PB4/PB5/PB6"],
        }
      },
      {
        ...SPI2,
        pins: {
          "CLK":  ["PA0", "PB7/PB8"],
          "MISO": ["PA0", "PA3", "PB0/PB1/PB2/PA8", "PB3/PB4/PB5/PB6"],
          "MOSI": ["PA0", "PA4", "PB0/PB1/PB2/PA8", "PB3/PB4/PB5/PB6"],
        }
      },
      {
        ...I2C1,
        pins: {
          "CLK": ["PB3/PB4/PB5/PB6", "PB7/PB8"],
          "SDA": ["PC14/PB9", "PB7/PB8"],
        }
      },
      {
        ...I2C2,
        pins: {
          "CLK": ["PA11[PA9]"],
          "SDA": ["PA12[PA10]"],
        }
      },
      {
        ...WAKEUP,
        pins: {
          "WKUP1": ["PA0"],
          "WKUP2": ["PA4"],
          "WKUP4": ["PA2"],
          "WKUP6": ["PB3/PB4/PB5/PB6"],
        }
      },
      {
        ...CLOCKS,
        pins: {
          "CLK": ["PC14/PB9"],
          "OSC_IN": ["PC14/PB9"],
          "OSC_OUT": ["PC15"],
          "MCO": ["PB0/PB1/PB2/PA8"],
          "LSCO": ["PA2"],
        }
      },
      {
        ...DEBUG,
        pins: {
          "IO": ["PA13"],
          "CLK": ["PA14/PA15"],
        }
      },
      {
        ...BOOT,
        pins: {
          "BOOT0": ["PA14/PA15"],
        }
      },
      {
        ...PWR_3V3,
        pins: {
          "3V3": ["VDD/VDDA"],
        }
      },
    ],
  },
];
