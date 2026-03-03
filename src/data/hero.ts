// src/data/hero.ts — Hero section content (mock data)
// Replace with real content after cloning.

import { siteConfig } from "../site.config";

export interface HeroFeature {
	title: string;
	description: string;
	/** SVG path data for the icon (24x24 viewbox, stroke) */
	iconPath: string;
	/** DaisyUI semantic color: "primary" | "secondary" | "accent" */
	color: "primary" | "secondary" | "accent";
}

export interface HeroCta {
	label: string;
	href: string;
	style: "primary" | "secondary" | "accent" | "outline" | "outline-secondary" | "outline-accent";
}

export interface HeroContent {
	headline: string;
	highlightedText: string;
	description: string;
	ctas: HeroCta[];
	features: HeroFeature[];
}

export const heroContent: HeroContent = {
	headline: "Ihr Partner für",
	highlightedText: "professionelle Baumpflege",
	description: `Wir verbinden traditionelles Handwerk mit modernster Diagnostik – für vitale Bäume und sichere Standorte in ${siteConfig.company.address.region}.`,
	ctas: [
		{ label: "Kontakt Aufnehmen", href: "/contact", style: "primary" },
		{ label: "Unsere Leistungen", href: "/services", style: "outline" },
	],
	features: [
		{
			title: "Baumpflege",
			description: "Fachgerechte Kronenpflege und Totholzentfernung per Seilklettertechnik.",
			iconPath:
				"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
			color: "primary",
		},
		{
			title: "Gutachten",
			description: "Wissenschaftlich fundierte Baumgutachten und Verkehrssicherheitsbewertungen.",
			iconPath:
				"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
			color: "secondary",
		},
		{
			title: "Technologie",
			description: "Bioakustik, Biomechanik und Umwelt-Datenanalyse für nachhaltige Lösungen.",
			iconPath:
				"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
			color: "accent",
		},
	],
};
