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

// Represents a pin that does not exist. See the description of
// `ChipVariant.pins` for details.
export const SKIPPED_PIN = Symbol();
// Represents a pin that does not exist. See the description of
// `ChipVariant.pins` for details.
export const SKIPPED_PIN_WITH_NUMBER = Symbol();

export type SKIPPED_PIN = typeof SKIPPED_PIN;
export type SKIPPED_PIN_WITH_NUMBER = typeof SKIPPED_PIN_WITH_NUMBER;

export type ChipDefinition = {
  // The name of this chip. This name should be a generic name that is not
  // specific to a particular package variant.
  name: string;
  // The manufacturer of this chip.
  manufacturer?: string;
  // Additional notes that are shown for this chip
  notes?: string;
  // A list of package variants of this chip. At least one variant is required.
  variants: ChipVariant[];
  // Optional configuration of color per pin. You can use this to color, e.g.,
  // all 1V8 pins of a chip in red. Keys are pin names, values are objects
  // containing colors.
  pins?: Record<string, { color?: string }>;
  // A list describing additional pin functionalities, such as which pins
  // support ADC, which pins support PWM, etc.. See the description of
  // `ChipData` for more information.
  data: ChipData[];
};

// This represents a package variant of a chip. Its main purpose is to map pin
// numbers to pin names, e.g., pin 1 is GND, pin 2 is PA0, etc.
export type ChipVariant = {
  // The name or names of all chips that use this package variant.
  name?: string | string[];
  // The package type, defaults to "dual". Dual and quad packages are
  // supported.
  package?: "dual" | "quad";
  // An array containing the pin names that are used for this package. For
  // example, `["GND", "PA0", "PB3", "VCC"]` corresponds to pin 1 being GND,
  // pin 2 being PA0, pin 3 being PB3, and pin 4 being VCC.
  //
  // For dual packages, the list must have a multiple of 2 elements. For quad
  // packages, the list must have a multiple of 4 elements.
  //
  // For packages that are missing some pins (e.g., SOT-23-5), use the
  // `SKIPPED_PIN` or the `SKIPPED_PIN_WITH_NUMBER` symbol. The difference
  // between the two is illustrated in the following examples:
  //
  // ["A",         "B", "C",   vs. ["A",                     "B", "C",
  //  SKIPPED_PIN, "D", "E"]        SKIPPED_PIN_WITH_NUMBER, "D", "E"]
  //    _______                       _______
  // A | 1   5 | E                 A | 1   6 | E
  // B | 2     |                   B | 2     |
  // C | 3   4 | D                 C | 3   4 | D
  //    -------                       -------
  //
  pins: (string | SKIPPED_PIN | SKIPPED_PIN_WITH_NUMBER)[];
  // Additional pins are rendered next to the package. They should be used for
  // things like bottom pads of QFP packages. Each additional pin must contain
  // a short description (such as "Bottom Pad") and the pin name (such as
  // "GND").
  additionalPins?: {
    description: string;
    pin: string;
  }[];
};

// Each `ChipData` object represents a group of pins that have a common
// functionality. For example, all pins that can be used as ADC inputs are
// grouped together in one `ChipData` object.
export type ChipData = {
  // The name of the functionality, e.g., "11-bit PWM Output Pins", "ADC", or
  // "External Interrupt Pins"
  name: string;
  // An optional color to use for the pins in this group.
  color?: string;
  // An optional flag that indicates whether the information of this group
  // should be hidden by default.
  defaultHidden?: boolean;
  // A mapping from tags to pin names, e.g.,:
  // {
  //   "PWM0": "PA0",
  //   "PWM1": ["PA3", "PB5"],
  // }
  // This would then display the "PWM0" label next to pin "PA0", and the "PWM1"
  // label next to pins "PA3" and "PB5".
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
