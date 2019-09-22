module.exports = {
	title: 'Leetcode Showcase',
	tagline: 'show my leetcode solutions',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Guide',
			logo: {
				alt: 'guide',
				src: 'img/logo.svg',
			},
			links: [
				{ to: 'docs/doc1', label: 'Solutions', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
