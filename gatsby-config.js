require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: 'Betty Briggs',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // Prismic repository name
        repositoryName: process.env.PRISMIC_REPO,

        // Api Access token from prismic
        accessToken: process.env.ACCESS_TOKEN,

        // Generate correct links
        linkResolver: ({ node, key, value }) => doc => {
          // Link resolver
          // if (doc.type === 'post') return `/posts/${doc.uid}`

          return `/doc/${doc.uid}`
        },

        // Only if you need something available in your link resolver
        fetchLinks: [

        ],

        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {
            // HTML Serializer
            // Return null for default html
            return null
          }
        ),

        // default language when fetching documents
        lang: '*'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
