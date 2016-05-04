(function () {
    "use strict";

    fluid.defaults("colin.pools.keyboard", {
        gradeNames: "flock.synth",

        synthDef: {
            ugen: "flock.ugen.filter.moog",
            resonance: {
                ugen: "flock.ugen.lfNoise",
                options: {
                    interpolation: "linear"
                },
                freq: 1,
                mul: 0.1,
                add: 0.4
            },

            cutoff: {
                ugen: "flock.ugen.lfNoise",
                options: {
                    interpolation: "linear"
                },
                freq: 1/3,
                mul: 400,
                add: 800
            },

            source: {
                id: "carrier",
                ugen: "flock.ugen.sinOsc",
                freq: {
                    ugen: "flock.ugen.lfNoise",
                    freq: {
                        ugen: "flock.ugen.sinOsc",
                        freq: 1/20,
                        mul: 1.5,
                        add: 1.5
                    },
                    mul: 120,
                    add: {
                        ugen: "flock.ugen.lfNoise",
                        options: {
                            interpolation: "linear"
                        },
                        freq: 1/12,
                        mul: 120,
                        add: 120
                    }
                },
                mul: {
                    id: "envelope",
                    ugen: "flock.ugen.envGen",
                    gate: 0,
                    // gate: {
                    //     ugen: "flock.ugen.lfPulse",
                    //     freq: {
                    //         ugen: "flock.ugen.lfNoise",
                    //         freq: {
                    //             ugen: "flock.ugen.lfNoise",
                    //             freq: 1/2,
                    //             mul: 0.05,
                    //             add: 0.06
                    //         },
                    //         mul: 0.05,
                    //         add: 0.075
                    //     },
                    //     width: {
                    //         ugen: "flock.ugen.lfNoise",
                    //         options: {
                    //             interpolation: "linear"
                    //         },
                    //         freq: 1/3,
                    //         mul: 0.02,
                    //         add: 0.03
                    //     }
                    // },
                    envelope: {
                        levels: [0, 1, 0.8, 0.9, 0],
                        times: [0.06, 0.03, 0.45, 0.3],
                        sustainPoint: 2
                    },
                    mul: 0.1
                }
            }
        }
    });
}());
