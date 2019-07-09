module.exports = {
  siteMetadata: {
    title: `dogs4u`,
    description: `Find dogs up for adoption`,
    author: `J-boi Trippz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DOGGO",
        // This is field under which it's accessible
        fieldName: "doggo",
        // Url to query from
        url:
          "https://api-euwest.graphcms.com/v1/cjxvs6uf01a4201fuyoi3fg7i/master",
      },
    },
    {
      resolve: `@moltin/gatsby-source-moltin`,
      options: {
        client_id: "rqtZXpR4RgbGckeMeMXNOSmjmg29oK4JtYX8EDZqGV",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
