import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		client: z.string(),
		industry: z.string(),
		summary: z.string(),
		featured: z.boolean().default(false),
		cover: image(),
		coverAlt: z.string(),
	}),
});

export const collections = { caseStudies };