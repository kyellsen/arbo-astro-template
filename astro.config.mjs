// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// Basis-URL — muss zur Produktions-Domain passen (für Sitemap & Canonical URLs)
	site: "https://arbosphere.de",

	integrations: [
		sitemap({
			// Interne / Dev-only-Seiten aus der Sitemap ausschließen
			filter: (page) => !page.includes("/colors"),
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
