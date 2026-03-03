import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs["flat/recommended"],
	{
		rules: {
			// Customize rules as needed
		},
	},
];
