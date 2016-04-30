(function () {
    "use strict";

    flock.init();

    fluid.defaults("colin.pools", {
        gradeNames: "fluid.viewComponent",

        components: {
            midiConnector: {
                type: "colin.pools.midiConnector",
                container: "{that}.dom.midiSelector"
            },

            band: {
                type: "colin.pools.band"
            }
        },

        selectors: {
            midiSelector: "#midi-selector-container"
        },

        listeners: {
            onCreate: [
                "{flock.enviro}.play()",
                "{that}.band.play()"
            ]
        }
    });

    fluid.defaults("colin.pools.midiConnector", {
        gradeNames: "flock.ui.midiConnector",

        components: {
            midiController: {
                type: "flock.midi.controller",
                createOnEvent: "afterConnectionOpen",
                options: {
                    components: {
                        connection: "{midiConnector}.connection",
                        synthContext: "{pools}.band"
                    }
                }
            }
        },

        listeners: {
            message: {
                "this": "console",
                method: "log",
                args: ["{arguments}.0"]
            }
        }
    });

}());
