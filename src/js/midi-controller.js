(function () {
    "use strict";

    fluid.defaults("colin.pools.midiController", {
        gradeNames: "flock.midi.controller",

        controlMap: {
            20: [
                {
                    synth: "crackle",
                    input: "dust.density.mul",
                    valuePath: "source", // TODO: Is this needed?
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 5
                    }
                },
                {
                    synth: "crackle",
                    input: "dust.density.add",
                    valuePath: "source", // TODO: Is this needed?
                    transform: {
                        ugen: "flock.ugen.math",
                        div: 5
                    }
                }
            ],
            // 21: {},
            // 12: {},
            // 93: {}
        }
    });
}());
