import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		client: z.string(),
		industry: z.string(),
		summary: z.string(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { caseStudies };