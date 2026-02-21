import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/posts/` directory.
	loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
      tags: z.array(z.string()),
			background: z.object({
        image: image(),
        credit: z.object({
          url: z.string(),
          text: z.string(),
        }).optional(),
      }).optional(),
		}),
});

export const collections = { posts };
