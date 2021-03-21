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
    {
      // TODO : before production deployment needs correction
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://oo234ju98.netlify.app',
        sitemap: 'https://oo234ju98.netlify.app/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', disallow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint:
          'https://api-eu-central-1.graphcms.com/v2/ckmhzz8xnkl9901xna1wb2big/master',
        stages: ['PUBLISHED']
      }
    },
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
        hooks: path.join(__dirname, 'src/hooks'),
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
