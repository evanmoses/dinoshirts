const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css")
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.edit.json"
      }
    }
  ],
  jest: {
    configure: {
      moduleNameMapper: {
        "^test-utils(.*)$": "<rootDir>/src/utils/test-utils/$1"
      }
    }
  }
};
