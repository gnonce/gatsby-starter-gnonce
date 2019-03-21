const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gnonce Gatsby starter`,
    titleShort: `Gnonce starter`,
    titleTemplate: `%s - Gnonce`,
    description: `Gatsby + Typescript + Styled Components = 💖`,
    url: `https://gnonce.com`,
    image: path.resolve(__dirname, 'src/images/gnonce-icon.png'),
    themeColor: `#fff`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.ts`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
