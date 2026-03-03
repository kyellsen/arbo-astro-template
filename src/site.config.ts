// src/site.config.ts — Central site configuration
// Toggle optional features and manage contact data here.
// This file is the Single Source of Truth for all company & contact information.

export const siteConfig = {
	/** Show the "Projekte" link in the navbar */
	showProjectsPage: true,

	// ── Firmen- & Kontaktdaten (Single Source of Truth) ──────────────

	company: {
		name: "Arbosphere",
		owner: "Kyell Jensen",
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
