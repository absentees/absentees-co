// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Scott Blissett - Designer/Developer',
  siteUrl: 'https://www.absentees.co',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Projects',
        path: '_posts/project/**/*.md',
      }
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


