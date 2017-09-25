'use strict'

// dato, allows you to get content coming from your administrative area;
// root, represents the root of your project and makes it easy to create local files and directories;
// i18n, is useful in multi-language sites to switch between the various available locales and get back translated content;
const util = require('util');
const fs = require('fs');
module.exports = (dato, root, i18n) => {

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


};
