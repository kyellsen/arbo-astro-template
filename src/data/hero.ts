// src/data/hero.ts — Hero section content
// Arbosphere: Environmental Data Science & Tree Technology umbrella org.

import { siteConfig } from "../site.config";

export interface HeroFeature {
	title: string;
	description: string;
	/** SVG path data for the icon (24x24 viewbox, stroke) */
	iconPath: string;
	/** Palette color name from CSS custom properties */
	color: "emerald" | "teal" | "cornflower" | "violet" | "magenta" | "gold";
	/** Optional link URL for the card */
	href?: string;
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
	headline: "Where Trees Meet",
	highlightedText: "Data Science",
	description:
		"Arbosphere bridges arboriculture, environmental sensing, and open-source software — building the tools that make tree management smarter, safer, and data-driven.",
	ctas: [
		{ label: "Explore Projects", href: "/projects", style: "primary" },
		{ label: "About Arbosphere", href: "/about", style: "outline" },
	],
	features: [
		{
			title: "Tree Care",
			description:
				"Professional arboriculture and tree maintenance — from crown care to complex rigging operations.",
			iconPath:
				"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
			color: "emerald",
			href: "https://baumpflege-oh.de",
		},
		{
			title: "Tree Management",
			description:
				"Data-driven tree inventories, risk assessments, and lifecycle management for municipalities and landowners.",
			iconPath:
				"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
			color: "teal",
			href: "https://kyelljensen.de/baumkontrolle",
		},
		{
			title: "Expert Witnesses",
			description:
				"Certified tree assessment, forensic analysis, and expert reports for legal and insurance proceedings.",
			iconPath:
				"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
			color: "cornflower",
			href: "https://kyelljensen.de/sachverstaendigenwesen",
		},
		{
			title: "Environmental Data Science",
			description:
				"Machine learning, statistical modeling, and AI applied to ecological datasets and biomechanical research.",
			iconPath:
				"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
			color: "violet",
			href: "/projects",
		},
		{
			title: "Environmental Software",
			description:
				"Open-source tools and FOSS packages like ArboLab — Python libraries for tree biomechanics and data analysis.",
			iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
			color: "magenta",
			href: "/projects",
		},
		{
			title: "Instrumentation & Measurement",
			description:
				"Custom sensor hardware, bioacoustic monitoring, and IoT solutions for environmental data acquisition.",
			iconPath:
				"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
			color: "gold",
			href: "/projects",
		},
	],
};
