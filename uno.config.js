// uno.config.ts
import { defineConfig, presetWind4 } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
	content: {
		pipeline: {
			include: [
				// the default
				/\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				"src/**/*.{js,ts}",
			],
		},
	},
	transformers: [transformerDirectives()],
	theme: {
		colors: {
			primary: {
				50: "#fcf2f7",
				100: "#f5d4e3",
				200: "#efb8d1",
				300: "#e89abe",
				400: "#e07aa9",
				500: "#d95894",
				600: "#b8497d",
				700: "#9a3d68",
				800: "#793052",
				900: "#5c253e",
				950: "#401a2c",
			},
		},
	},
	presets: [
		presetWind4({
			dark: "class",
		}),
	],
});
