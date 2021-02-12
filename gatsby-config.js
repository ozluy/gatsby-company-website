const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Destan Nakliyat',
    titleTemplate: '%s',
    description: 'Profesyonel Ev Ofis Nakliyatı',
    url: 'https://destannakliyat.com.tr',
    image: '/images/logo.jpg'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        common: path.join(__dirname, 'src/common'),
        views: path.join(__dirname, 'src/views'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/index.js')
      }
    }
  ]
}
