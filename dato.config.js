'use strict'

// dato, allows you to get content coming from your administrative area;
// root, represents the root of your project and makes it easy to create local files and directories;
// i18n, is useful in multi-language sites to switch between the various available locales and get back translated content;
const util = require('util');
const fs = require('fs');

module.exports = (dato, root, i18n) => {

	// Create a YAML data file to store global data about the site
	var clientList = [];
	dato.clients.forEach((client) => {
		clientList.push(client.name);
	});

	root.createDataFile('src/data/settings.yml', 'yaml', {
		name: dato.site.globalSeo.siteName,
		description: dato.about.bio,
		links: dato.about.links,
		clients: clientList
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
						screenshots: project.screenshots.map(function(screenshot){
							return screenshot.url({ w: 800, h: 600, fm: 'pjpg',  fit: 'fill', crop: 'top', bg: "fff" })
						}),
						// screenshot: project.screenshot.url({ w: 800, h: 450, fm: 'pjpg',  fit: 'crop', crop: 'top' }),
						thumbnail: project.screenshots[0].url({ w: 50, h: 50, fm: 'pjpg',  fit: 'crop', crop: 'top' })
					}
				}
			);
		});
	});

	//Side Projects
	root.directory("src/html/pages/sideProjects", (sideProjectsDir) => {
		dato.sideProjects.forEach((project) => {
			console.log(project.title);

			var imageUrls, imageThumbUrl;

			if(project.screenshots != null && project.screenshots.length > 0) {
				imageUrls = project.screenshots.map(function(screenshot){
					return screenshot.url({ w: 800, h: 600, fm: 'pjpg',  fit: 'fill', crop: 'top', bg: "fff" })
				});
				imageThumbUrl = project.screenshots[0].url({ w: 50, h: 50, fm: 'pjpg',  fit: 'crop', crop: 'top' });
			}

			sideProjectsDir.createPost(
				`${project.title}.md`, "yaml", {
					frontmatter: {
						title: project.title,
						description: project.description,
						screenshots: imageUrls,
						thumbnail: imageThumbUrl

					}
				}
			);
		});
	});
};
