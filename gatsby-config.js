module.exports = {
  siteMetadata: {
    title: `Oompa Loompa Confeitaria e Evento`,
    author: `André Lobo`,
    description: `Confeitaria e Eventos`,
    siteUrl: `https://gatsby-snipcart-starter.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oompa Loompa`,
        short_name: `Confeitaria e Eventos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        //replace with own Snipcart API key
        apiKey: 'MjQ2MDY4MDctMDZkYi00ZTY0LWFlODItNzhlMmEzZDg1NTBiNjM2OTc2Nzk1NjcwMTU3MTkx',
        autopop: true,
          }
    },
    `gatsby-plugin-styled-components`,
  ],
}
