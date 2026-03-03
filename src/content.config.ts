// src/content.config.ts — Astro Content Collections configuration
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/index.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			tags: z.array(z.string()),
			color: z.string().optional(),
			github: z.string().optional(),
			titleImage: image().optional(),
			gallery: z.array(image()).optional(),
		}),
});

export const collections = { projects };
