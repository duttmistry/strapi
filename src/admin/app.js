// @ts-ignore
import logo from "./extensions/icons/logo.png";
import menu from "./extensions/icons/favicon.ico";
import favicon from "./extensions/lock.png";
import { darkTheme, lightTheme } from "./extensions/theme";
const config = {
  head: {
    favicon: favicon,
    title: "Dr Reddy's Dashboard",
  },
  auth: {
    logo: logo,
  },
  // Replace the favicon
  // Add a new locale, other than 'en'
  locales: ["fr", "de", "en"],
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: menu,
  },
  // theme: {
  //   light: {
  //     colors: {
  //       primary100: "#D6EFFF",
  //       primary200: "#AECFFF",
  //       primary500: "#007EFF",
  //       primary600: "#0066CC",
  //       primary700: "#0052A3",
  //       neutral0: "#F6F6F9", // Background color for light theme
  //       neutral100: "#FFFFFF", // Paper color for light theme
  //     },
  //   },
  //   dark: {
  //     colors: {
  //       primary100: "#D6EFFF",
  //       primary200: "#AECFFF",
  //       primary500: "#007EFF",
  //       primary600: "#0066CC",
  //       primary700: "#0052A3",
  //       neutral0: "#1C1C1E", // Background color for dark theme
  //       neutral100: "#2C2C2E", // Paper color for dark theme
  //     },
  //   },
  // },
  theme: {
    dark: {
      colors: darkTheme,
    },
    light: {
      colors: lightTheme,
    },
  },
  translations: {
    fr: {
      "Auth.form.welcome.title": "Welcome to Dr Reddy",
      "Auth.form.welcome.subtitle": "Connectez-vous à votre application",
      "app.components.LeftMenu.navbrand.title": "Strapi",
    },
    en: {
      "Auth.form.welcome.title": "Welcome to Dr Reddy",
      "Auth.form.welcome.subtitle": "Login into your Dr Readdy Account",
      "app.components.LeftMenu.navbrand.title": "Dr Reddy Dashboard",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
