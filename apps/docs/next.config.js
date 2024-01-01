import nextraDef from "nextra";

const withNextra = nextraDef({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
});

export default withNextra();
// module.exports = withNextra({
//   i18n: {
//     locales: ['en', 'pl', 'es','fr','de','it','ru','zh','tr','ja','hi'],
//     defaultLocale: 'en'
//   }
// });
