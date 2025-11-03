// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abrahamsil626.github.io',
  base: 'astrolanding_demo',
  vite: {
    plugins: [tailwindcss()]
  },
});