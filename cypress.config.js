const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    projectId: "1",
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1600,
    viewportHeight: 900,
    chromeWebSecurity: false,
    video: false,
    failOnStatusCode: false,
  }
});