// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://sandhu-kulwant.netlify.app',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/thanks'),
		}),
	],
});