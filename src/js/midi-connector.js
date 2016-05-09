(function () {
    "use strict";

    fluid.defaults("colin.pools.midiConnector", {
        gradeNames: "flock.ui.midiConnector",

        components: {
            midiController: {
                type: "colin.pools.midiController",
                createOnEvent: "afterConnectionOpen",
                options: {
                    components: {
                        connection: "{midiConnector}.connection",
                        synthContext: "{pools}.band"
                    }
                }
            }
        }
    });
}());
