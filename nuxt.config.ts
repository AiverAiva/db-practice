// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // axios: {
  //   baseURL: 'http://localhost:3000/api'
  // },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.postcss'
  },
  // devtools: { enabled: true },
  nitro: {
    plugins: [
      '@/server/index'
    ]
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      link: [
        {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
        }
      ]
    }
  }
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'login', method: 'post', propertyName: 'data.token' },
  //         user: { url: 'me', method: 'get', propertyName: 'data' },
  //         logout: false
  //       }
  //     }
  //   }
  // }
})
