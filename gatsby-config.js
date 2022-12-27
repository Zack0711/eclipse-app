module.exports = {
  siteMetadata: {
    title: `Eclipse App`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-stylus`,
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
  pathPrefix: 'eclipse-spalch/',
}
