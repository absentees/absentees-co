// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Arena = require("are.na");
const arena = new Arena();

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const blocks = addCollection({
      typeName: 'Block'
    });

    const { contents } = await arena.channel('web-0abin7eksxc')
      .get();

    for (const block of contents) {
      if (block.image) {
        blocks.addNode({
          id: block.id,
          title: block.title,
          image: block.image.display
        })
      }
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
