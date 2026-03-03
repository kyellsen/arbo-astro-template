// src/site.config.ts — Central site configuration
// Single Source of Truth for brand, theme, navigation, and contact data.
// When cloning this template for a new brand:
//   1. Update brand, theme, lang, navigation
//   2. Update company, contact, social, hours
//   3. Adjust theme pair in global.css (uncomment the matching theme)

export const siteConfig = {
	// ── Brand ──────────────────────────────────────────────────────────
	brand: {
		/** Displayed brand name */
		name: "Arbosphere",
		/** Single letter for the logo badge */
		logoInitial: "A",
		/** Subtitle shown next to the logo (optional) */
		logoSubtitle: "Template",
		/** Production URL (no trailing slash) — must match astro.config.mjs site */
		siteUrl: "https://arbosphere.de",
	},

	// ── SEO Defaults ───────────────────────────────────────────────────
	seo: {
		/** Default title for pages without a specific title */
		defaultTitle: "Arbosphere — Professionelle Baumpflege",
		/** Title template (e.g., "%s | Arbosphere") */
		titleTemplate: "%s | Arbosphere",
		/** Default description for pages without a specific description */
		defaultDescription:
			"Arbosphere — Ihr Partner für professionelle Baumpflege, Baumkontrolle und Gutachten in der Region.",
	},

	// ── Theme ──────────────────────────────────────────────────────────
	/** DaisyUI theme names as defined in global.css */
	theme: {
		light: "arbo-light",
		dark: "arbo-dark",
	},

	// ── Language ───────────────────────────────────────────────────────
	/** HTML lang attribute */
	lang: "de" as const,

	// ── Navigation ────────────────────────────────────────────────────
	/** Main navigation items rendered in Header + Mobile Nav.
	 *  Remove or add entries as needed. External links open in new tab. */
	navigation: [
		{ label: "Start", href: "/" },
		{ label: "Leistungen", href: "/services" },
		{ label: "Projekte", href: "/projects" },
		{ label: "Über uns", href: "/about" },
		{ label: "Kontakt", href: "/contact" },
	] as const,

	// ── Firmen- & Kontaktdaten (Single Source of Truth) ───────────────

	company: {
		name: "Arbosphere",
		owner: "Kyell Jensen",
		taxId: "DE XXX XXX XXX",
		address: {
			street: "Lindenweg 4",
			zip: "23714",
			city: "Timmdorf",
			region: "Ostholstein, Schleswig-Holstein",
			regionShort: "Holsteinische Schweiz · Ostholstein",
		},
	},

	contact: {
		email: "mail@kyelljensen.de",
		phone: "+4917634503823",
		phoneDisplay: "0176 34503823",
		whatsapp: "https://wa.me/4917634503823",
		signal: "https://signal.me/#p/+4917634503823",
	},

	social: {
		github: "https://github.com/kyellsen",
		instagram: "https://instagram.com/kyellsen",
	},

	hours: [
		{ days: "Montag – Freitag", time: "08:00 – 17:00" },
		{ days: "Samstag", time: "nach Vereinbarung" },
		{ days: "Sonntag", time: "geschlossen" },
	] as const,
};

// ── Derived types ─────────────────────────────────────────────────────
export type NavItem = (typeof siteConfig.navigation)[number];
