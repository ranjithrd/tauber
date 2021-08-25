const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "TauberJS",
	tagline:
		"A powerful alternative to NPM Scripts that helps you create CLIs in one file.",
	url: "https://tauber.js.org",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	organizationName: "ranjithrd", // Usually your GitHub org/user name.
	projectName: "tauber", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "TauberJS",
			items: [
				{
					type: "doc",
					docId: "about",
					position: "left",
					label: "Docs",
				},
				{
					href: "https://github.com/ranjithrd/tauber",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/intro",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Ranjith RD. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/ranjithrd/tauber/edit/docs/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
}
