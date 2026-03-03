// src/config/seo.ts — Zentrale SEO-Konfiguration
// Alle SEO-relevanten Texte und Defaults an einem Ort pflegen.
// Echte Begriffe / Keywords hier eintragen — die Seiten lesen automatisch mit.

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
export const siteConfig = {
	/** Firmen- / Projektname */
	name: "Arbosphere",

	/** Fallback-Titel, wenn kein Seitentitel gesetzt ist */
	defaultTitle: "Arbosphere – Professionelle Baumpflege",

	/**
	 * Template für den endgültigen <title>.
	 * `%s` wird durch den Seitentitel ersetzt.
	 * Beispiel: "Leistungen | Arbosphere"
	 */
	titleTemplate: "%s | Arbosphere",

	/** Fallback Meta-Description */
	defaultDescription:
		"Professionelle Baumpflege, Baumkontrolle und Gutachten — nachhaltig, sicher und zertifiziert.",

	/**
	 * Basis-URL der Website (ohne Trailing-Slash).
	 * Muss mit `site` in astro.config.mjs übereinstimmen.
	 */
	siteUrl: "https://arbosphere.de",

	/** Sprach- und Regions-Code für Open Graph */
	locale: "de_DE",

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
		description:
			"Arbosphere — Ihr Partner für professionelle Baumpflege, Baumkontrolle und Gutachten in der Region.",
	},
	"/about": {
		title: "Über uns",
		description: "Erfahren Sie mehr über das Team, die Werte und die Geschichte von Arbosphere.",
	},
	"/services": {
		title: "Leistungen",
		description:
			"Kronenpflege, Spezialfällung, Baumkontrolle, Gutachten und Standortberatung — unser Leistungsportfolio.",
	},
	"/contact": {
		title: "Kontakt",
		description:
			"Nehmen Sie Kontakt mit Arbosphere auf — wir beraten Sie gerne zu allen Fragen rund um Ihre Bäume.",
	},
	"/colors": {
		title: "Farben – Arbo CI",
		description: "Interne Farbpaletten-Referenz des Arbo Corporate Identity Systems.",
		noindex: true,
	},
};

// ─── Structured Data (JSON-LD) ──────────────────────────────────────
// Basis-Daten für das Organization / LocalBusiness Schema.
// Felder mit Platzhalter-Werten — später durch echte Daten ersetzen.
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: siteConfig.name,
	url: siteConfig.siteUrl,
	description: siteConfig.defaultDescription,
	logo: `${siteConfig.siteUrl}/favicon.svg`,
	// Adresse — Platzhalter
	address: {
		"@type": "PostalAddress",
		streetAddress: "Musterstraße 1",
		addressLocality: "Musterstadt",
		postalCode: "12345",
		addressCountry: "DE",
	},
	// Kontakt — Platzhalter
	telephone: "+49 123 456789",
	email: "info@arbosphere.de",
};
