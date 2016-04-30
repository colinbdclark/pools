(function () {
    "use strict";

    fluid.defaults("colin.pools", {
        gradeNames: "fluid.viewComponent",

        components: {
            midiConnector: {
                type: "colin.pools.midiConnector",
                container: "{that}.dom.midiSelector"
            },

        },

        selectors: {
            midiSelector: "#midi-selector-container"
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
                        connection: "{midiConnector}.connection"
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
