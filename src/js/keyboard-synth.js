(function () {
    "use strict";

    fluid.defaults("colin.pools.keyboard", {
        gradeNames: "flock.synth",

        synthDef: {
            id: "granulator",
            ugen: "flock.ugen.triggerGrains",
            buffer: {
                id: "ravel",
                url: "audio/ravel-jeux-deau.wav"
            },
            dur: 0.5,
            centerPos: {
                id: "centrePosPhase",
                ugen: "flock.ugen.phasor",
                start: 0,
                reset: {
                    ugen: "flock.ugen.math",
                    source: 0,
                    mul: {
                        ugen: "flock.ugen.bufferDuration",
                        buffer: "ravel"
                    }
                },
                end: {
                    ugen: "flock.ugen.bufferDuration",
                    buffer: "ravel"
                },
                step: {
                    ugen: "flock.ugen.bufferPhaseStep",
                    buffer: "ravel"
                }
            },
            trigger: {
                id: "trigger",
                ugen: "flock.ugen.impulse",
                freq: 3
            },
            mul: {
                id: "envelope",
                ugen: "flock.ugen.envGen",
                gate: 0,
                envelope: {
                    levels: [0, 1, 0.8, 0],
                    times: [0.2, 0.1, 0.6],
                    sustainPoint: 1
                },

                mul: 0
            }
        }
    });
}());
