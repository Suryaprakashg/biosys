/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "primary-container": "rgba(0, 59, 47, 0.1)",
        "surface": "var(--surface)",
        "surface-container-lowest": "var(--surface)",
        "tertiary-fixed": "#d8e2ff",
        "on-secondary-container": "var(--primary)",
        "surface-container-high": "var(--bg-row-light)",
        "secondary": "var(--secondary)",
        "inverse-on-surface": "#f3f0ef",
        "inverse-surface": "#313030",
        "tertiary": "#002455",
        "surface-variant": "var(--bg-row-light)",
        "on-tertiary-fixed": "#001a41",
        "surface-container": "var(--bg-row-subtle)",
        "outline": "var(--border)",
        "on-background": "var(--text-primary)",
        "tertiary-container": "#00397e",
        "surface-bright": "var(--background)",
        "on-secondary-fixed": "var(--primary)",
        "on-primary": "#ffffff",
        "secondary-fixed": "var(--secondary)",
        "error": "#ba1a1a",
        "secondary-fixed-dim": "var(--secondary)",
        "surface-container-low": "var(--bg-row-subtle)",
        "on-secondary": "var(--primary)",
        "on-primary-container": "var(--primary)",
        "on-tertiary": "#ffffff",
        "primary-fixed": "rgba(0, 59, 47, 0.1)",
        "on-surface-variant": "var(--text-secondary)",
        "tertiary-fixed-dim": "#adc6ff",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "rgba(0, 59, 47, 0.8)",
        "primary-fixed-dim": "rgba(0, 59, 47, 0.2)",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "outline-variant": "var(--border)",
        "surface-container-highest": "var(--bg-row-light)",
        "on-secondary-fixed-variant": "var(--primary)",
        "on-tertiary-fixed-variant": "#004493",
        "on-primary-fixed": "var(--primary)",
        "surface-tint": "var(--primary)",
        "secondary-container": "var(--secondary)",
        "surface-dim": "#dcd9d9",
        "inverse-primary": "rgba(0, 59, 47, 0.2)",
        "on-tertiary-container": "#77a5ff",
        "background": "var(--background)",
        "on-surface": "var(--text-primary)",
        "border": "var(--border)",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.5rem",       // 8px
        "xl": "1.5rem",      // 24px (Card border radius!)
        "2xl": "1.5rem",     // 24px
        "3xl": "2rem",       // 32px
        "full": "9999px"
      },
      spacing: {
        "unit": "4px",
        "margin": "32px",
        "xs": "4px",
        "sm": "8px",
        "max_width": "1280px",
        "gutter": "24px",
        "md": "16px",
        "xl": "40px",
        "lg": "24px"
      },
      fontFamily: {
        "headline-h2": ["Aptos Display", "Aptos", "Manrope", "sans-serif"],
        "code": ["JetBrains Mono", "monospace"],
        "headline-h1": ["Aptos Display", "Aptos", "Manrope", "sans-serif"],
        "display": ["Aptos Display", "Aptos", "Manrope", "sans-serif"],
        "body-lg": ["Aptos", "Inter", "sans-serif"],
        "body-md": ["Aptos", "Inter", "sans-serif"],
        "body-sm": ["Aptos", "Inter", "sans-serif"],
        "label-caps": ["Aptos Display", "Aptos", "Inter", "sans-serif"]
      },
      fontSize: {
        "headline-h2": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
        "code": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "headline-h1": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
        "display": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
