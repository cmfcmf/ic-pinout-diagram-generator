import { ChipDefinition } from "./common";

export const chips: ChipDefinition[] = [
  {
    name: "74HC595",
    variants: [
      {
        pins: [
          "Q_B",
          "Q_C",
          "Q_D",
          "Q_E",
          "Q_F",
          "Q_G",
          "Q_H",
          "GND",
          "SER_OUT",
          "SRCLR",
          "SRCLK",
          "RCLK",
          "OE",
          "SER_IN",
          "Q_A",
          "VCC",
        ],
      },
    ],
    data: [
      {
        name: "Data",
        color: "#26B9E4",
        pins: {
          "Data Out": ["Q_A", "Q_B", "Q_C", "Q_D", "Q_E", "Q_F", "Q_G", "Q_H"],
        },
      },
      {
        name: "Serial In/Out",
        color: "#BFD366",
        pins: {
          "Serial In": ["SER_IN"],
          "Serial Out": ["SER_OUT"],
        },
      },
      {
        name: "Control Pins",
        color: "#FF9D07",
        pins: {
          "Shift Register Clock": ["SRCLK"],
          "Latch Clock": ["RCLK"],
        },
      },
      {
        name: "Advanced Control Pins",
        color: "#F4D620",
        pins: {
          "Output Enable": ["OE"],
          "Shift Register Clear": ["SRCLR"],
        },
      },
    ],
  },
];
