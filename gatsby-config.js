module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v295z1ziolxx`,
        accessToken: `Px-a53VC8K2Ff9Nh9hwUs7R-fWSYEXs1PZ_3JPGtxf0`,
      },
    },
  ],
}
