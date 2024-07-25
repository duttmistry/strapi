module.exports = {
  // ...
  i18n: {
    enabled: true,
    config: {
      locales: ["en", "fr"], // Add the locales you need
      defaultLocale: "en",
    },
  },
  // ...
  testing: {
    enabled: true,
    resolve: "./src/plugins/testing",
  },
  // ...
};
