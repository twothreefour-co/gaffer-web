module.exports = {
	darkMode: "class",
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/lib/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				obviously: ["Obviously", "sans-serif"],
				sans: ["Obviously", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
			},
			colors: {
				primary: {
					DEFAULT: "#F5F607",
				},
				// You can add other custom colors or overrides here
			},
		},
	},
};
