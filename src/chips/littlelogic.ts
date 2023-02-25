import {
    ChipDefinition,
} from "./common";

import {
    LOGIC_INPUT,
    LOGIC_INPUT_SCHMITT,
    LOGIC_OUTPUT,
    LOGIC_OUTPUT_TRISTATE,
    CONTROL,
    PASSIVE,
    NO_CONNECT,
} from "./logiccommon";

export const chips: ChipDefinition[] = [
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1GX04",
        notes: "Crystal Oscillator Driver\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1GX04\nSOT-236 DBV\nSOT-363 DCK\nSOT-536 DRL"
                ],
                package: "dual",
                pins: [
                    "NC", "GND", "X1",
                    "X2", "VCC", "Y"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Crystal Input":    ["X1"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Crystal Output":   ["X2"],
                    "Main Output":      ["Y"]
                }
            },
            {
                ...NO_CONNECT,
                pins: {
                    "NC":   ["NC"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G10",
        notes: "Single 3-Input NAND Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G10\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"],
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "NAND Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G11",
        notes: "Single 3-Input AND Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G11\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"],
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "AND Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G18",
        notes: "1-Of-2 Noninverting Demultiplexer with 3-State Outputs\nAvailable in LVC and AUC families",
        variants: [
            {
                name: [
                    "1G18\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "S", "GND", "A",
                    "Y1", "VCC", "Y0"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Signal Input":    ["A"]
                }
            },
            {
                ...LOGIC_OUTPUT_TRISTATE,
                pins: {
                    "Y0 Output (S = Low)":      ["Y0"],
                    "Y1 Output (S = High)":      ["Y1"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Output Select":    ["S"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G19",
        notes: "1-Of-2 Decoder and Demultiplexer\nAvailable in LVC and AUC families",
        variants: [
            {
                name: [
                    "1G19\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "~E",
                    "Y1", "VCC", "Y0"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Address Input":    ["A"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Y0 Output (A = Low)":      ["Y0"],
                    "Y1 Output (A = High)":      ["Y1"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Output Enable (Active Low)":    ["~E"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G27",
        notes: "Single 3-Input NOR Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G27\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"],
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "NOR Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G29",
        notes: "2-Of-3 Decoder and Demultiplexer\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G29\nSSOP-8 DCT\nVSSOP-8 DCU"
                ],
                package: "dual",
                pins: [
                    "~G", "Y1", "A0", "GND",
                    "Y2", "A1", "Y0", "VCC"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "A0 Input":    ["A0"],
                    "A1 Input":    ["A1"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Y0 Output":      ["Y0"],
                    "Y1 Output":      ["Y1"],
                    "Y2 Output":      ["Y2"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Output Enable (Active Low)":    ["~G"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G74",
        notes: "Single Positive-Edge-Triggered D-Type Flip-Flop with Clear and Preset\nAvailable in LVC and AUP families",
        variants: [
            {
                name: [
                    "1G74\nSSOP-8 DCT\nVSSOP-8 DCU"
                ],
                package: "dual",
                pins: [
                    "CLK", "D", "~Q", "GND",
                    "Q", "~CLR", "~PRE", "VCC"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Data Input":           ["D"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Non-Inverting Output":     ["Q"],
                    "Inverting Output":         ["~Q"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Flip-Flop Clock":      ["CLK"],
                    "Flip-Flop Clear":      ["~CLR"],
                    "Flip-Flop Preset":     ["~PRE"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G123",
        notes: "Single Retriggerable Monostable Multivibrator\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G123\nSSOP-8 DCT\nVSSOP-8 DCU"
                ],
                package: "dual",
                pins: [
                    "~A", "B", "~CLR", "GND",
                    "Q", "CEXT", "REXT/CEXT", "VCC"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT_SCHMITT,
                pins: {
                    "Falling Edge Input":          ["~A"],
                    "Rising Edge Input":           ["B"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Output":     ["Q"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Clear":      ["~CLR"],
                }
            },
            {
                ...PASSIVE,
                pins: {
                    "External Capacitor":             ["CEXT"],
                    "External Resistor/Capacitor":    ["REXT/CEXT"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G139",
        notes: "2-To-4 Line Decoder\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G139\nSSOP-8 DCT\nVSSOP-8 DCU"
                ],
                package: "dual",
                pins: [
                    "A", "B", "Y3", "GND",
                    "Y2", "Y1", "Y0", "VCC"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Address Input A":      ["A"],
                    "Address Input B":      ["B"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Output 0":     ["Y0"],
                    "Output 1":     ["Y1"],
                    "Output 2":     ["Y2"],
                    "Output 3":     ["Y3"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1T157",
        notes: "Single 2-Input Schmitt-Trigger Buffer Multiplexer\nAvailable in AUP family",
        variants: [
            {
                name: [
                    "1T157\nSOT-363 DCK"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "C", "VCC", "Y",
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT_SCHMITT,
                pins: {
                    "Input A":      ["A"],
                    "Input B":      ["B"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Output":     ["Y"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Mux Select":   ["C"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G175",
        notes: "Single D-Type Flip-Flop with Asynchronous Clear\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G175\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY"
                ],
                package: "dual",
                pins: [
                    "CLK", "GND", "D",
                    "Q", "VCC", "~CLR"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Data Input":    ["D"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "Output":      ["Q"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Flip-Flop Clock":      ["CLK"],
                    "Flip-Flop Clear":      ["~CLR"],
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G332",
        notes: "Single 3-Input OR Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G332\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "OR Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G373",
        notes: "Single D-Type Latch with 3-State Output\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G373\nSOT-236 DBV\nSOT-363 DCK"
                ],
                package: "dual",
                pins: [
                    "LE", "GND", "D",
                    "Q", "VCC", "~OE"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Data Input":    ["D"]
                }
            },
            {
                ...LOGIC_OUTPUT_TRISTATE,
                pins: {
                    "Data Output":      ["Q"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Latch Enable":                     ["LE"],
                    "Output Enable (Active Low)":       ["~OE"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G374",
        notes: "Single D-Type Flip-Flop with 3-State Output\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G374\nSOT-236 DBV\nSOT-363 DCK"
                ],
                package: "dual",
                pins: [
                    "CLK", "GND", "D",
                    "Q", "VCC", "~OE"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Data Input":    ["D"]
                }
            },
            {
                ...LOGIC_OUTPUT_TRISTATE,
                pins: {
                    "Data Output":      ["Q"]
                }
            },
            {
                ...CONTROL,
                pins: {
                    "Flip-Flop Clock":                  ["CLK"],
                    "Output Enable (Active Low)":       ["~OE"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G386",
        notes: "Single 3-Input XOR Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G386\nSOT-236 DBV\nSOT-363 DCK\nMicroQFN DRY\nMicroQFN DSF"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "XOR Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G0832",
        notes: "Single 3-Input AND-OR Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G0832\nSOT-236 DBV\nSOT-363 DCK"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "AND-OR Output":      ["Y"]
                }
            }
        ]
    },
    {
        manufacturer: "Texas Instruments",
        name: "SN74__1G3208",
        notes: "Single 3-Input OR-AND Gate\nAvailable in LVC family",
        variants: [
            {
                name: [
                    "1G3208\nSOT-236 DBV\nSOT-363 DCK"
                ],
                package: "dual",
                pins: [
                    "A", "GND", "B",
                    "Y", "VCC", "C"
                ],
            }
        ],
        data: [
            {
                ...LOGIC_INPUT,
                pins: {
                    "Input A":    ["A"],
                    "Input B":    ["B"],
                    "Input C":    ["C"]
                }
            },
            {
                ...LOGIC_OUTPUT,
                pins: {
                    "OR-AND Output":      ["Y"]
                }
            }
        ]
    },
];
