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
}());
