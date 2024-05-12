// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // modules: ['@nuxtjs/supabase'],
  nitro: {
    storage: {
      cache: {
        driver: "memory",
      },
    },
  },
  plugins: ['./plugins/api.ts'],
  runtimeConfig: {
    public: {
      KEY: process.env.SUPABASE_KEY,
    },
  },
  css: ["~/assets/css/fonts.css"],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "shadcn-nuxt", "@nuxtjs/supabase",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});