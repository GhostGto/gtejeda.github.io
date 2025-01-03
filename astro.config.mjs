import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://gtejeda.github.io',
  base: 'gtejeda.github.io',
  integrations: [tailwind(), icon(), mdx()]
});
