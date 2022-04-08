/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`Max Girteit Dev Portfolio`,
    description:`A personal web development portfolio site for Max Girteit.`,
    titleTemplate: `%s | WebDev Portfolio`,
    url:`https://maxgirteit.com`,
    twitterUsername:`@notpkfeyerabend`,
    image:`/homescreen.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, "project"],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            {
              family: "Open Sans",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
