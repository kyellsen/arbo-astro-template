// src/config/seo.ts — Zentrale SEO-Konfiguration
// Alle SEO-relevanten Texte und Defaults an einem Ort pflegen.
// Brand-Name und URL werden aus site.config.ts importiert (Single Source of Truth).
import { siteConfig } from "../site.config";

// ─── Typen ───────────────────────────────────────────────────────────
export interface PageSeo {
	/** Seitentitel (wird ins titleTemplate eingesetzt) */
	title: string;
	/** Meta-Description für Suchmaschinen */
	description: string;
	/** Open-Graph-Bild (relativer Pfad ab Root, z.B. "/images/og-services.jpg") */
	ogImage?: string;
	/** Open-Graph-Typ (default: "website") */
	ogType?: "website" | "article";
	/** Seite vor Indexierung schützen? */
	noindex?: boolean;
}

// ─── Site-weite Defaults ─────────────────────────────────────────────
export const seoConfig = {
	/** Firmen- / Projektname (aus site.config.ts) */
	name: siteConfig.brand.name,

	/** Fallback-Titel, wenn kein Seitentitel gesetzt ist */
	defaultTitle: siteConfig.seo.defaultTitle,

	/**
	 * Template für den endgültigen <title>.
	 * `%s` wird durch den Seitentitel ersetzt.
	 * Beispiel: "Leistungen | Arbosphere"
	 */
	titleTemplate: siteConfig.seo.titleTemplate,

	/** Fallback Meta-Description */
	defaultDescription: siteConfig.seo.defaultDescription,

	/**
	 * Basis-URL der Website (ohne Trailing-Slash).
	 * Aus site.config.ts — muss mit `site` in astro.config.mjs übereinstimmen.
	 */
	siteUrl: siteConfig.brand.siteUrl,

	/** Sprach- und Regions-Code für Open Graph */
	locale: siteConfig.lang === "de" ? "de_DE" : "en_US",

	/** Fallback-OG-Image (relativer Pfad ab Root) */
	defaultOgImage: "/images/og-default.jpg",

	/** Twitter/X @-Handle (leer lassen, wenn nicht vorhanden) */
	twitterHandle: "",
} as const;

// ─── Pro-Seite SEO-Daten ─────────────────────────────────────────────
// Schlüssel = Pfad der Seite (mit führendem /, ohne Trailing-Slash).
// Fehlende Einträge fallen auf die site-weiten Defaults zurück.
export const pageSeo: Record<string, PageSeo> = {
	"/": {
		title: "Start",
		description: siteConfig.seo.defaultDescription,
	},
	"/about": {
		title: "Über uns",
		description: `Erfahren Sie mehr über das Team, die Werte und die Geschichte von ${siteConfig.brand.name}.`,
	},
	"/services": {
		title: "Leistungen",
		description:
			"Kronenpflege, Spezialfällung, Baumkontrolle, Gutachten und Standortberatung — unser Leistungsportfolio.",
	},
	"/contact": {
		title: "Kontakt",
		description: `Nehmen Sie Kontakt mit ${siteConfig.brand.name} auf — wir beraten Sie gerne zu allen Fragen rund um Ihre Bäume.`,
	},
	"/colors": {
		title: "Farben – Arbo CI",
		description: "Interne Farbpaletten-Referenz des Arbo Corporate Identity Systems.",
		noindex: true,
	},
};

// ─── Structured Data (JSON-LD) ──────────────────────────────────────
// Basis-Daten für das Organization / LocalBusiness Schema.
// Reads from both seoConfig (SEO defaults) and siteConfig (contact data).
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
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
