const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z63n21',
  e2e: {
    //baseUrl: 'http://win-mm8glctgeq2.migraven.ir/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
