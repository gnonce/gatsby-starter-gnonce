const path = require('path')

module.exports = {
  siteMetadata: {
    site: `Gnonce-starter`,
    title: `Gatsby Starter Gnonce`,
    titleTemplate: `%s - Gnonce`,
    description: `Gatsby + Typescript + Styled Components = 💖`,
    siteUrl: `https://gatsby-starter-gnonce.netlify.com/`,
    language: `en`,
    color: `#003580`,
    twitter: 'gnonce',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gnonce`,
        short_name: `Gnonce`,
        start_url: `/`,
        background_color: `#003580`,
        theme_color: `#003580`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
