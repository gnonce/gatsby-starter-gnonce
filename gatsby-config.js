module.exports = {
  siteMetadata: {
    name: `Gnonce Gatsby starter`,
    tagline: `Gatsby + Typescript + Styled Components = 💖`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
