(function () {
    "use strict";

    fluid.defaults("colin.pools.midiController", {
        gradeNames: "flock.midi.controller",

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

            5: {
                synth: "crackle",
                input: "filter.cutoff.freq",
                transform: {
                    mul: 10
                }
            },

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
}());
