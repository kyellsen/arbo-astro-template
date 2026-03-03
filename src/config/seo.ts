// src/config/seo.ts — Central SEO configuration
// All SEO-relevant texts and defaults in one place.
// Brand name and URL are imported from site.config.ts (Single Source of Truth).
import { siteConfig } from "../site.config";

// ─── Types ───────────────────────────────────────────────────────────
export interface PageSeo {
	/** Page title (inserted into titleTemplate) */
	title: string;
	/** Meta description for search engines */
	description: string;
	/** Open Graph image (relative path from root, e.g. "/images/og-services.jpg") */
	ogImage?: string;
	/** Open Graph type (default: "website") */
	ogType?: "website" | "article";
	/** Prevent indexing? */
	noindex?: boolean;
}

// ─── Site-wide Defaults ─────────────────────────────────────────────
export const seoConfig = {
	/** Company / project name (from site.config.ts) */
	name: siteConfig.brand.name,

	/** Fallback title when no page title is set */
	defaultTitle: siteConfig.seo.defaultTitle,

	/**
	 * Template for the final <title>.
	 * `%s` is replaced by the page title.
	 * Example: "Projects | Arbosphere"
	 */
	titleTemplate: siteConfig.seo.titleTemplate,

	/** Fallback meta description */
	defaultDescription: siteConfig.seo.defaultDescription,

	/**
	 * Base URL of the website (no trailing slash).
	 * From site.config.ts — must match `site` in astro.config.mjs.
	 */
	siteUrl: siteConfig.brand.siteUrl,

	/** Locale code for Open Graph */
	locale: siteConfig.lang === "de" ? "de_DE" : "en_US",

	/** Fallback OG image (relative path from root) */
	defaultOgImage: "/images/og-default.jpg",

	/** Twitter/X @-handle (leave empty if not available) */
	twitterHandle: "",
} as const;

// ─── Per-page SEO data ─────────────────────────────────────────────
// Key = page path (leading /, no trailing slash).
// Missing entries fall back to site-wide defaults.
export const pageSeo: Record<string, PageSeo> = {
	"/": {
		title: "Home",
		description: siteConfig.seo.defaultDescription,
	},
	"/about": {
		title: "About",
		description: `Learn about ${siteConfig.brand.name} — our vision, mission, and the technology we build for the arboricultural industry.`,
	},
	"/projects": {
		title: "Projects",
		description:
			"Explore our open-source tools, sensor hardware, and research projects at the intersection of tree science and data technology.",
	},
	"/colors": {
		title: "Colors — Arbo CI",
		description: "Internal color palette reference for the Arbo Corporate Identity system.",
		noindex: true,
	},
};

// ─── Structured Data (JSON-LD) ──────────────────────────────────────
// Base data for the Organization schema.
// Reads from both seoConfig (SEO defaults) and siteConfig (contact data).
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: seoConfig.name,
	url: seoConfig.siteUrl,
	description: seoConfig.defaultDescription,
	logo: `${seoConfig.siteUrl}/favicon.svg`,
	address: {
		"@type": "PostalAddress",
		streetAddress: siteConfig.company.address.street,
		addressLocality: siteConfig.company.address.city,
		postalCode: siteConfig.company.address.zip,
		addressCountry: "DE",
	},
	telephone: siteConfig.contact.phone,
	email: siteConfig.contact.email,
};
