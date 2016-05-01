(function () {
    "use strict";

    fluid.defaults("colin.pools.crackle", {
        gradeNames: "flock.synth",

        synthDef: {
            ugen: "flock.ugen.filter.moog",
            cutoff: {
                ugen: "flock.ugen.lfNoise",
                mul: 10000,
                add: 10000,
                freq: 1/4
            },
            resonance: {
                ugen: "flock.ugen.lfNoise",
                options: {
                    interpolation: "linear"
                },
                mul: 1.5,
                add: 1.5
            },
            source: {
                id: "dust",
                ugen: "flock.ugen.dust",
                density: {
                    ugen: "flock.ugen.lfNoise",
                    options: {
                        interpolation: "linear"
                    },
                    mul: 2,
                    add: 2
                },
                rate: "audio"
            }
        }
    });

}());
