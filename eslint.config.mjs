import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// Customize rules as needed
		},
	},
];
