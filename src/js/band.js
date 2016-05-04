(function () {
    "use strict";

    fluid.defaults("colin.pools.band", {
        gradeNames: "flock.band",

        components: {
            crackle: {
                type: "colin.pools.crackle"
            },

            droplet: {
                type: "colin.pools.droplet"
            },

            keyboard: {
                type: "colin.pools.keyboard"
            }
        }
    });
}());
