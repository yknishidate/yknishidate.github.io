require("dotenv").config({
  path: ".env.development",
})

module.exports = {
  siteMetadata: {
    title: `Yuki Nishidate`,
    description: ``,
    author: `Yuki Nishidate`,
    siteUrl: `https://nishidate-yuki.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1F2937`,
        showSpinner: false,
      },
    },
    "@chakra-ui/gatsby-plugin",
  ],
}
