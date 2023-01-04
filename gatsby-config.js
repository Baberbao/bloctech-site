/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "BlocTech",
    siteUrl: "https://www.bloctechsolutions.com/",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url:
          process.env.WPGRAPHQL_URL || "https://bloctechsolutions.com/graphql",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
  ],
}
