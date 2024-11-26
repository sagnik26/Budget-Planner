const { withPlugins } = require("@expo/config-plugins");
// import { withPlugins } from "@expo/config-plugins";

module.exports = function withAsyncStorage(config) {
  return withPlugins(config, []);
};
