module.exports = {
  // ...
  test: {
    enabled: true,
    resolve: "./src/plugins/test",
  },
  i18n: {
    enabled: true,
    config: {
      locales: ["en", "fr"], // Add the locales you need
      defaultLocale: "en",
    },
  },
  // ...
};
