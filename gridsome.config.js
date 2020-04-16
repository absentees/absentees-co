// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Scott Blissett - Designer/Developer',
  siteUrl: 'https://www.absentees.co',
  siteDescription: 'Digital designer/developer based in Sydney NSW.',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://graphql.datocms.com/',
        fieldName: 'datoCMS',
        headers: {
          Authorization: `Authorization: ${process.env.DATO_API_TOKEN}`,
        },
      },
    },
    // {
    //   use: '@gridsome/source-datocms',
    //   options: {
    //     apiToken: process.env.DATO_API_TOKEN, // required
    //     previewMode: false,
    //     apiUrl: 'https://site-api.datocms.com'
    //   }
    // },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-55969548-1'
      }
    }
  ]
}

