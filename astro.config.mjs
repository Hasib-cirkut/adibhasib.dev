import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from '@astrojs/vercel/serverless'
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      post: "storyblok/Post"
    },
    apiOptions: {
      region: "us"
    }
  }), tailwind(), vue()]
});
