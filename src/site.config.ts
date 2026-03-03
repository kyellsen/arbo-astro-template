// src/site.config.ts — Central site configuration
// Single Source of Truth for brand, theme, navigation, and contact data.

export const siteConfig = {
	// ── Brand ──────────────────────────────────────────────────────────
	brand: {
		/** Displayed brand name */
		name: "Arbosphere",
		/** Single letter for the logo badge */
		logoInitial: "A",
		/** Subtitle shown next to the logo (optional) */
		logoSubtitle: "Environmental Technology",
		/** Production URL (no trailing slash) — must match astro.config.mjs site */
		siteUrl: "https://arbosphere.de",
	},

	// ── SEO Defaults ───────────────────────────────────────────────────
	seo: {
		/** Default title for pages without a specific title */
		defaultTitle: "Arbosphere — Environmental Data Science & Tree Technology",
		/** Title template (e.g., "%s | Arbosphere") */
		titleTemplate: "%s | Arbosphere",
		/** Default description for pages without a specific description */
		defaultDescription:
			"Arbosphere connects environmental data science, tree management, and instrumentation technology. Open-source tools, sensor hardware, and expert consulting for the arboricultural industry.",
	},

	// ── Theme ──────────────────────────────────────────────────────────
	/** DaisyUI theme names as defined in global.css */
	theme: {
		light: "arbo-cornflower-light",
		dark: "arbo-cornflower-dark",
	},

	// ── Language ───────────────────────────────────────────────────────
	/** HTML lang attribute */
	lang: "en" as const,

	// ── Navigation ────────────────────────────────────────────────────
	/** Main navigation items rendered in Header + Mobile Nav. */
	navigation: [
		{ label: "Home", href: "/" },
		{ label: "Projects", href: "/projects" },
		{ label: "About", href: "/about" },
	] as const,

	// ── Company & Contact Data (Single Source of Truth) ──────────────

	company: {
		name: "Arbosphere",
		owner: "Kyell Jensen",
		taxId: "DE XXX XXX XXX",
		address: {
			street: "Lindenweg 4",
			zip: "23714",
			city: "Timmdorf",
			region: "Schleswig-Holstein, Germany",
			regionShort: "Holsteinische Schweiz · Ostholstein",
		},
	},

	contact: {
		email: "io@arbosphere.de",
	},

	social: {
		github: "https://github.com/kyellsen",
	},

	hours: [
		{ days: "Monday – Friday", time: "08:00 – 17:00" },
		{ days: "Saturday", time: "by appointment" },
		{ days: "Sunday", time: "closed" },
	] as const,
};

// ── Derived types ─────────────────────────────────────────────────────
export type NavItem = (typeof siteConfig.navigation)[number];
