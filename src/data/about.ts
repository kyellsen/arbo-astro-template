// src/data/about.ts — About section content
// Arbosphere as an umbrella org for environmental tech & data science.

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
	/** Values section */
	valuesHeadline: string;
	values: AboutValue[];
}

export const aboutContent: AboutContent = {
	headline: "About Arbosphere",
	paragraphs: [
		`${siteConfig.company.name} is where arboriculture meets data science. Founded by Kyell Jensen — a certified arborist and environmental data scientist — Arbosphere serves as the umbrella for a growing ecosystem of open-source tools, sensor hardware, and consulting services that bring modern technology to the world of tree management.`,
		"What started as hands-on tree care evolved into a conviction: the arboricultural industry deserves better data, better tools, and better software. Arbosphere incubates projects like ArboLab (a FOSS Python package for tree biomechanics), develops custom sensor hardware for environmental monitoring, and provides expert consulting at the intersection of tree science and technology.",
		"Our mission is to make tree management smarter, safer, and more transparent — through open data, reproducible science, and purpose-built technology.",
	],
	valuesHeadline: "Our Principles",
	values: [
		{
			title: "Open Source First",
			description:
				"We believe in transparent, reproducible science. Our core tools are FOSS — free for everyone to use, inspect, and improve.",
			iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
			color: "primary",
		},
		{
			title: "Data-Driven Decisions",
			description:
				"Every assessment, every recommendation is backed by measurement data — not guesswork. Sensors and statistics over gut feeling.",
			iconPath:
				"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
			color: "secondary",
		},
		{
			title: "Bridging Disciplines",
			description:
				"We connect arborists, ecologists, and software engineers — building tools at the intersection of tree science and technology.",
			iconPath:
				"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
			color: "accent",
		},
	],
};
