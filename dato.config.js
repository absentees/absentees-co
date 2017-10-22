'use strict'

// dato, allows you to get content coming from your administrative area;
// root, represents the root of your project and makes it easy to create local files and directories;
// i18n, is useful in multi-language sites to switch between the various available locales and get back translated content;
const util = require('util');
const fs = require('fs');

module.exports = (dato, root, i18n) => {

	// Create a YAML data file to store global data about the site
	root.createDataFile('src/data/settings.yml', 'yaml', {
		name: dato.site.globalSeo.siteName,
		faviconMetaTags: dato.site.faviconMetaTags,
		seoMetaTags: dato.site.seoMetaTags
	});

	// Clients
	root.directory("src/html/pages/clients", (clientDir) => {
		var clientList = [];
		dato.clients.forEach((client) => {
			clientList.push(client.name);
		});

		clientDir.createPost(
			`index.md`, "yaml", {
				frontmatter: {
					title: "Client List",
					clients: clientList,
					layout: 'clients.njk'
				}
			}
		);
	});

	// // Projects
	root.directory("src/html/pages/projects", (projectsDir) => {
		dato.projects.forEach((project) => {
			console.log(project);

			projectsDir.createPost(
				`${project.title}.md`, "yaml", {
					frontmatter: {
						title: project.title,
						client: project.client.name,
						url: project.url,
						description: project.description,
						screenshot: project.screenshot.url({ w: 400, h: 300, fm: 'pjpg' })
					}
				}
			);
		});
	});

	//Side Projects
	root.directory("src/html/pages/sideProjects", (sideProjectsDir) => {
		dato.sideProjects.forEach((project) => {
			console.log(project.title);

			var screenshotCollection = [];
			
			if (project.images.length > 0) {
				project.images.forEach(screenshot => {
					screenshotCollection.push({
						title: screenshot.title,
						url: screenshot.url({ w: 400, h: 300, fm: 'pjpg' })
					});	
				});	
			}
			
			sideProjectsDir.createPost(
				`${project.title}.md`, "yaml", {
					frontmatter: {
						title: project.title,
						description: project.description,
						screenshots: screenshotCollection
					}
				}
			);
		});
	});
};
