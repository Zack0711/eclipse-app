module.exports = {
  siteMetadata: {
    title: `Eclipse App`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assests`,
        path: `${__dirname}/src/assests`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    */
    `gatsby-plugin-stylus`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eclipse-app`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assests/eclipse-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: 'eclipse-app/public/',
}
