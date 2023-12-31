/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  rippleui: {

		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
          primary: "#000000",
					backgroundPrimary: "#ffffff",
					
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
          primary: "#ffffff",
					backgroundPrimary: "#000000",
				},
			},
		],
	},

  plugins: [require("rippleui")],
}