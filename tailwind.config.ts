import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1440px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				}
			},
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans]
			},
			opacity: {
				"4": ".04",
				"7": ".07",
				"17": ".17"
			},
			boxShadow: {
				card: "0 2px 1px 1px var(--shadow)",
				inset: "0 1px 0 0 var(--shadow) inset",
				button: "0 1px 0 1px var(--shadow)"
			},
			borderRadius: {
				7: "7px",
				9: "9px"
			}
		}
	},
	plugins: [
		tailwindcssAnimate,
		typography,
		plugin(function ({ theme, matchUtilities }) {
			// Square utility
			matchUtilities(
				{
					sq: (value) => ({
						width: value,
						height: value
					})
				},
				{
					values: theme("spacing")
				}
			);
		})
	]
} satisfies Config;
