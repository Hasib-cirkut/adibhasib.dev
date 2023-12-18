import defaultTheme from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"
import plugin from 'tailwindcss/plugin'


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
        body: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [typography,
    plugin(function({ addVariant }) {
      addVariant('prose-inline-code', '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))')
    })],
}
