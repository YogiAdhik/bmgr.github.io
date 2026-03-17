import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://bmgr.pages.dev',
  output: 'static',
  prefetch: true,
  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
        mdi: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
