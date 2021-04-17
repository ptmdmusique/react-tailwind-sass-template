const { override, addPostcssPlugins } = require("customize-cra");

module.exports = override((config, env) => {
  addPostcssPlugins([require("tailwindcss")])(config);

  return config;
});
