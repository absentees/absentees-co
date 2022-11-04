// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Scott Blissett - Product Designer",
	siteUrl: "https://www.absentees.co",
	siteDescription: "Product Designer based in Sydney NSW.",
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Experiments",
				path: "_content/posts/experiment/**/*.md"
			},
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Websites",
				path: "_content/posts/website/**/*.md"
			},
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "About",
				path: "_content/pages/about.md"
			},
		},
		{
			use: "gridsome-source-rss",
			options: {
				feedUrl:
					"https://www.instapaper.com/starred/rss/4947229/Id9po8tqCIjKH7uS41GkqTKs",
				typeName: "Articles",
				// Parser options, see: https://www.npmjs.com/package/rss-parser
				parser: {},
			},
		},
		{
			use: `gridsome-plugin-netlify-cms`,
			options: {
				configPath: `static/admin/config.yml`,
				htmlPath: "static/admin/index.html",
			},
		},
		{
			use: "@gridsome/plugin-google-analytics",
			options: {
				id: "UA-55969548-1",
			},
		},
	],
	transformers: {
		//Add markdown support to all file-system sources
		remark: {
		}
	}
};
