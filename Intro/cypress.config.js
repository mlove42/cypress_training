const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            specPattern: "cypress/integration/examples/*.js";
        },
    },
});
