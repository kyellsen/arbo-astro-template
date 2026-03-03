// src/data/about.ts — About section content (mock data)
// Replace with real content after cloning.

import type { ImageMetadata } from "astro";
import imgTeamGroup from "../assets/heroes/about-hero.png";
import { siteConfig } from "../site.config";

export interface AboutValue {
	title: string;
	description: string;
	/** SVG path data for the icon (24x24 viewbox, stroke) */
	iconPath: string;
	/** DaisyUI semantic color */
	color: "primary" | "secondary" | "accent";
}

export interface AboutContent {
	/** Section headline */
	headline: string;
	/** Main paragraphs */
	paragraphs: string[];
	/** Team group image */
	teamGroupImage: ImageMetadata;
	teamGroupImageAlt: string;
	teamHeadline: string;
	teamDescription: string;
	/** Values section */
	valuesHeadline: string;
	values: AboutValue[];
}

export const aboutContent: AboutContent = {
	headline: "Über uns",
	paragraphs: [
		`${siteConfig.company.name} ist Ihr Partner für professionelle Baumpflege und Baumsachverständigung in ${siteConfig.company.address.region}. Seit über einem Jahrzehnt arbeiten wir in und an Bäumen – was als klassische Baumpflege begann, hat sich zu einer ganzheitlichen Philosophie entwickelt.`,
		"Wir betrachten den Baum nicht als Problem, sondern als lebenden Organismus, der Expertise und Respekt verdient. Unser Team vereint handwerkliches Können in der Seilklettertechnik mit wissenschaftlicher Diagnostik. Durch den Einsatz moderner Messmethoden wie Schalltomographie und bioakustischer Sensoren treffen wir fundierte Entscheidungen – für die Sicherheit von Menschen und den Erhalt wertvoller Bäume.",
	],
	teamGroupImage: imgTeamGroup,
	teamGroupImageAlt: `Das gesamte ${siteConfig.company.name}-Team`,
	teamHeadline: "Unser Team",
	teamDescription: `Hinter ${siteConfig.company.name} stehen engagierte Fachleute, die Leidenschaft für Bäume mit fundiertem Wissen verbinden.`,
	valuesHeadline: "Unsere Werte",
	values: [
		{
			title: "Qualität",
			description: "Arbeit nach ZTV-Baumpflege und aktuellen Forschungsstandards.",
			iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
			color: "primary",
		},
		{
			title: "Zuverlässigkeit",
			description: "Termingerecht, transparent und mit klarer Kommunikation.",
			iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
			color: "secondary",
		},
		{
			title: "Nachhaltigkeit",
			description: `Baumerhalt vor Fällung. Holzverwertung über das Sägewerk ${siteConfig.company.address.city}.`,
			iconPath:
				"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
			color: "accent",
		},
	],
};

// Hero image for parallax start page
export { imgTeamGroup as aboutHeroImage };
export const aboutHeroAlt = `Das ${siteConfig.company.name}-Team auf einer Wiese in ${siteConfig.company.address.regionShort}`;
