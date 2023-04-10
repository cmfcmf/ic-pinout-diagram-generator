import { ensureIsArray } from "../util";

export const PULL_UP_DOWN = {
  name: "Pins with Internal Pull-up/Pull-Down",
  color: "#FFC869",
  defaultHidden: true,
};

export const MAXIMUM_CURRENT = {
  name: "Maximum Sink/Drive Current",
  color: "#FFC869",
  defaultHidden: true,
};

export const LCD = {
  name: "LCD Pins (VDD/2 LCD Bias Voltage Generator)",
  color: "#E5CDA2",
};

export const PWM11 = {
  name: "11-bit PWM Output Pins",
  color: "#26B9E4",
};

export const PWM8 = {
  name: "8-bit PWM Output Pins",
  color: "#26B9E4",
};

export const PWM_TIMER = {
  name: "Timer PWM Output Pins",
  color: "#67CEEC",
};

export const COMPARATOR = {
  name: "Comparator Input/Output Pins",
  color: "#BFD366",
};

export const EXTERNAL_INTERRUPT = {
  name: "External Interrupt Pins",
  color: "#FF9D07",
};

export const PROGRAMMING_PINS = {
  name: "Programming Pins",
};

export const ADC = {
  name: "ADC Input Channel",
  color: "#95B600",
};

export const TIMER_CLOCK_SOURCES = {
  name: "Timer Clock Source Pins",
  color: "#F4D620",
};

export const EXTERNAL_CRYSTAL = {
  ...TIMER_CLOCK_SOURCES,
  name: "External Crystal Pins",
};

export const CRYSTAL_AND_TIMER_CLOCK_SOURCES = {
  ...EXTERNAL_CRYSTAL,
  name: "External Crystal / Timer Clock Source Pins",
};

export const SKIPPED_PIN = Symbol();
export const SKIPPED_PIN_WITH_NUMBER = Symbol();

export type SKIPPED_PIN = typeof SKIPPED_PIN;
export type SKIPPED_PIN_WITH_NUMBER = typeof SKIPPED_PIN_WITH_NUMBER;

export type ChipDefinition = {
  name: string;
  manufacturer?: string;
  notes?: string;
  variants: ChipVariant[];
  data: ChipData[];
  pins?: Record<string, { color?: string }>;
};

export type ChipVariant = {
  name?: string | string[];
  pins: (string | SKIPPED_PIN | SKIPPED_PIN_WITH_NUMBER)[];
  package?: "dual" | "quad";
  additionalPins?: {
    description: string;
    pin: string;
  }[];
};

export type ChipData = {
  name: string;
  color?: string;
  defaultHidden?: boolean;
  pins: Record<string, string | string[]>;
};

export function copyAndChangeName(chip: ChipDefinition, oldName: string, newName: string) {
  return {
    ...chip,
    name: chip.name.replaceAll(oldName, newName),
    variants: chip.variants.map(variant => ({
      ...variant,
      name: variant.name !== undefined
        ? ensureIsArray(variant.name).map(name => name.replaceAll(oldName, newName))
        : variant.name,
    })),
  };
}
