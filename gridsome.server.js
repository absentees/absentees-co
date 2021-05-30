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


    // const channel = await arena.channel('web-0abin7eksxc').get();
    const ch = await arena.channel('web-0abin7eksxc').get({ 
      page: 1, 
      per: 100,
    });

    

    for (let i = 1; i <= Math.ceil(ch.length/100); i++) {
      let p = await arena.channel('web-0abin7eksxc').get({ 
        page: i, 
        per: 100,
      });
      console.log(p.page);
      for (const block of p.contents) {
        if (block.image) {
          blocks.addNode({
            id: block.id,
            title: block.title,
            image: block.image.thumb,
            url: (block.source != null) ? block.source.url : ""
          })
        }
      }
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
