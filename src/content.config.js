// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const i18n = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/assets/i18n" }),
	schema: z.any(),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { i18n };
