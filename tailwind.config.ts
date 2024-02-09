import type { Config } from "tailwindcss";

const config: Config = {
  	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  	],
	theme: {
		extend: {
			height: {
				footer: "20dvh",
				header: "15dvh",
			},
			padding: {
				header: "15dvh",
			},
		},
	},
	plugins: [],
};
export default config;
