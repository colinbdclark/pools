(function () {
    "use strict";

    fluid.defaults("colin.pools.midiController", {
        gradeNames: [
            "colin.pools.crackleMap",
            "colin.pools.dropletMap",
            "colin.pools.keyboardMap",
            "flock.midi.controller"
        ],

        controlMap: {
            // Master volume.
            7: [
                {
                    synth: "crackle",
                    input: "flocking-out.mul",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 64
                    }
                },
                {
                    synth: "droplet",
                    input: "flocking-out.mul",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 32
                    }
                }
            ]
        }
    });

    fluid.defaults("colin.pools.crackleMap", {
        gradeNames: "fluid.component",

        controlMap: {
            20: {
                synth: "crackle",
                input: "filter.mul",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 64
                }
            },

            21: {
                synth: "crackle",
                input: "dust.density.freq",
                transform: {
                    mul: 100
                }
            },

            12: [
                {
                    synth: "crackle",
                    input: "dust.density.mul",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 5
                    }
                },
                {
                    synth: "crackle",
                    input: "dust.density.add.value",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 5
                    }
                }
            ],

            93: {
                synth: "crackle",
                input: "dust.density.add.mul",
                transform: {
                    add: 1
                }
            },

            5: [
                {
                    synth: "crackle",
                    input: "filter.resonance.mul",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 32
                    }
                },
                {
                    synth: "crackle",
                    input: "filter.resonance.add",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 32
                    }
                }
            ],

            18: [
                {
                    synth: "crackle",
                    input: "filter.cutoff.mul",
                    transform: {
                        mul: 100,
                        add: 30
                    }
                },
                {
                    synth: "crackle",
                    input: "filter.cutoff.add",
                    transform: {
                        mul: 100,
                        add: 31
                    }
                }
            ]
        }
    });

    fluid.defaults("colin.pools.dropletMap", {
        gradeNames: "fluid.component",

        controlMap: {
            28: {
                synth: "droplet",
                input: "envelope.mul",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 2000
                }
            },

            29: {
                synth: "droplet",
                input: "sequencer.freq",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 2
                }
            },

            30: {
                synth: "droplet",
                input: "gateRandomizer.freq",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 10
                }
            },

            31: [
                {
                    synth: "droplet",
                    input: "gateRandomizer.mul",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 2
                    }
                },
                {
                    synth: "droplet",
                    input: "gateRandomizer.add",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 20
                    }
                }
            ],

            74: {
                synth: "droplet",
                input: "gate.width",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 128
                }
            },

            71: {
                synth: "droplet",
                input: "sequencer.add",
                transform: {
                    sub: 64
                }
            },

            85: {
                synth: "droplet",
                input: "envelope.timeScale",
                transform: {
                    mul: 0.25,
                    add: 0.1
                }
            }
        }
    });

    fluid.defaults("colin.pools.keyboardMap", {
        gradeNames: "fluid.component",

        controlMap: {
            1: [
                {
                    synth: "keyboard",
                    input: "centrePosPhase.reset.source",
                    valuePath: "source",
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 127
                    }
                }
            ],

            25: {
                synth: "keyboard",
                input: "envelope.mul",
                valuePath: "source",
                transform: {
                    ugen: "flock.ugen.math",
                    div: 127
                }
            },

            73: {
                synth: "keyboard",
                input: "granulator.dur",
                valuePath: "source.source",
                transform: {
                    ugen: "flock.ugen.passThrough",
                    source: {
                        ugen: "flock.ugen.math",
                        div: 64
                    },
                    add: 0.01
                }
            },

            75: {
                synth: "keyboard",
                input: "trigger.freq",
                transform: {
                    mul: 0.5
                }
            }
        },
        noteMap: {
            noteOn: [
                {
                    synth: "keyboard",
                    input: "granulator.speed",
                    valuePath: "source.source",
                    transform: {
                        ugen: "flock.ugen.passThrough",
                        source: {
                            ugen: "flock.ugen.math",
                            div: 127
                        },
                        mul: 0.5,
                        add: 0.5
                    }
                },
                {
                    synth: "keyboard",
                    input: "centrePosPhase.trigger"
                },
                {
                    synth: "keyboard",
                    input: "envelope.gate"
                }
            ],

            noteOff: [
                {
                    synth: "keyboard",
                    input: "centrePosPhase.trigger",
                    value: 0
                },
                {
                    synth: "keyboard",
                    input: "envelope.gate",
                    value: 0
                }
            ]
        }
    });
}());
