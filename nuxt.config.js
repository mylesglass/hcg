var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
});

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hcg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt.js static site w/ netlify cms' },
      { name: 'msapplication-TileColor', content: '#0e132b' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#0e132b'}
    ],
    link: [
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico',
        rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png',
        rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png',
        rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png',
        rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png',
        rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png',
        rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png',
        rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png',
        rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png',
        rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png',
        rel: "icon", type: "image/png", sizes: "192x192",  href: "/android-icon-192x192.png",
        rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png",
        rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png",
        rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png",
        rel: 'stylesheet', href: 'https://rsms.me/inter/inter-ui.css'
      }
    ]
  },
  /*
  ** CSS
  */
  css: [
    '~/css/main.scss'
  ],
  /*
  ** Modules
  */
  modules: [
    'nuxt-buefy'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  /*
  ** Render
  */
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
