// src/data/team.ts — Team member content (mock data)
// Replace with real content after cloning.
// Images are imported via astro:assets for automatic optimization.

import type { ImageMetadata } from "astro";
import imgKai from "../assets/team/kai-ellersen.png";
import imgLena from "../assets/team/lena-moeller.png";
import imgMarkus from "../assets/team/markus-thiel.png";
import imgJana from "../assets/team/jana-peters.png";

export interface TeamMember {
	name: string;
	role: string;
	description: string;
	imageSrc: ImageMetadata;
	imageAlt: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: "Kai Ellersen",
		role: "Geschäftsführer & Baumsachverständiger",
		description: "Seit über 15 Jahren widmet er sich dem Schutz und der Pflege von Bäumen.",
		imageSrc: imgKai,
		imageAlt: "Porträt von Kai Ellersen, Geschäftsführer",
	},
	{
		name: "Lena Möller",
		role: "Forstwirtin & Kletterin",
		description: "Mit Seil und Säge sorgt sie dafür, dass jeder Baum in besten Händen ist.",
		imageSrc: imgLena,
		imageAlt: "Porträt von Lena Möller, Forstwirtin",
	},
	{
		name: "Markus Thiel",
		role: "Baumpfleger & Baumkontrolleur",
		description: "Er verbindet präzises Handwerk mit einem geschulten Blick für Baumstatik.",
		imageSrc: imgMarkus,
		imageAlt: "Porträt von Markus Thiel, Baumpfleger",
	},
	{
		name: "Jana Peters",
		role: "Büro & Organisation",
		description: "Sie hält alle Fäden zusammen und ist die erste Ansprechpartnerin für Kunden.",
		imageSrc: imgJana,
		imageAlt: "Porträt von Jana Peters, Büro & Organisation",
	},
];
