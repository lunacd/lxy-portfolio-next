/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        spacing: "var(--spacing)",
        "spacing-lg": "var(--spacing-lg)",
        "spacing-2lg": "calc(2 *var(--spacing-lg))",
        "spacing-3lg": "calc(3 *var(--spacing-lg))",
      },
      space: {
        spacing: "var(--spacing)",
        "spacing-lg": "var(--spacing-lg)",
      },
      minHeight: {
        132: "33rem",
        152: "38rem",
      },
      width: {
        single: "var(--single)",
        half: "var(--half)",
        "two-thirds": "var(--two-thirds)",
        84: "21rem",
      },
      inset: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
