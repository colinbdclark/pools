(function () {
    "use strict";

    fluid.defaults("colin.pools.droplet", {
        gradeNames: "flock.synth",

        synthDef: {
            ugen: "flock.ugen.sin",
            freq: {
                id: "sequencer",
                ugen: "flock.ugen.sequence",
                values: [480, 350, 440, 300, 90, 240, 60, 390],
                freq: {
                    ugen: "flock.ugen.lfNoise",
                    options: {
                        interpolation: "linear"
                    },
                    freq: 1/3,
                    mul: 2,
                    add: 2
                },
                loop: 1.0,
                mul: 1,
                add: 0
            },
            mul: {
                id: "envelope",
                ugen: "flock.ugen.envGen",
                envelope: {
                    levels: [0, 1, 0],
                    times: [0.05, 0.03],
                    curves: "sin"
                },
                gate: {
                    id: "gate",
                    ugen: "flock.ugen.lfPulse",
                    freq: {
                        id: "gateRandomizer",
                        ugen: "flock.ugen.lfNoise",
                        freq: 1/6,
                        mul: 0.075,
                        add: 0.075
                    },
                    width: 0.01
                },
                mul: 0
            }
        }
    });
}());
