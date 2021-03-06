module.exports = {
  modules: [
    'nuxt-device-detect',
    '@nuxtjs/pwa'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '加古川ゴミ分別アプリ',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '加古川市のゴミ分別アプリです。中国語にも対応済みです。'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', href: '/apple-icon.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/mplus1p.css'}
    ]
  },
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
  plugins: [
    {src: '~plugins/ga.js', ssr: false}
  ],
  manifest: {
    name: '加古川ゴミ分別アプリ',
    short_name: '加古川ゴミAPP',
    title: '加古川ゴミ分別アプリ',
    'og:title': '加古川ゴミ分別アプリ',
    description: '加古川ゴミ分別アプリ',
    'og:description': '加古川ゴミ分別アプリ',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  /*
  ** Customize the progress bar color
  */
  // loading: {color: '#3B8070'},
  /*

  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
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
  workbox: {
    dev: true, //開発環境でもPWAできるように
  }
}

