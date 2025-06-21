// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://your-portfolio-domain.com/sitemap.xml'
    }]
  ],

  // CSS
  css: [
    '~/assets/css/main.css'
  ],

  // App configuration
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Nguyen Huu Tu - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full-Stack Developer | Frontend, Backend, Mobile, DevOps Expert' },
        { property: 'og:title', content: 'Nguyen Huu Tu - Portfolio' },
        { property: 'og:description', content: 'Full-Stack Developer | Frontend, Backend, Mobile, DevOps Expert' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  // Site configuration
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-username.github.io/portfolio-website'
  },

  // Enable static site generation
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/', '/projects', '/cv', '/contact']
    }
  },



  // Runtime config
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY || ''
    }
  }
})
