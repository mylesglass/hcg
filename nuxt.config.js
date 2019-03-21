var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/programmes': 'programmes/*.json'
});

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Harbour City GymSports',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Harbour City GymSports is located in Hataitai, Wellington. We offer fun, friendly, and exciting gymnastics programmes for all ages and abilities.' },
      { name: 'msapplication-TileColor', content: '#0e132b' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#0e132b'}
    ],
    link: [
      {
        rel: 'stylesheet', href: 'https://rsms.me/inter/inter-ui.css'
      },
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'
      },
      {
        rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png'
      },
      {
        rel: "icon", type: "image/png", sizes: "192x192",  href: "/android-icon-192x192.png"
      },
      {
        rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"
      },
      {
        rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png"
      },
      {
        rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"
      }
    ]
  },
  /*
  ** CSS
  */
  css: [
    '~/css/main.scss',
    'vue-muuri/dist/vue-muuri.css'
  ],
  /*
  ** Modules
  */
  modules: [
    'nuxt-buefy',
    'nuxt-material-design-icons',
    '@nuxtjs/redirect-module'
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
  },

  plugins: [
    { src: '~/plugins/vue-muuri', ssr: false },
    { src: '~/plugins/vue-carousel.js', ssr: false }
  ],

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false
    
      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }
    
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }
    
      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            position = { selector: to.hash }
          }
          resolve(position)
        })
      })
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
