import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Load Markdown and MDX files in the `content/posts/` directory.
  loader: glob({ base: './content/posts', pattern: '**/*.md' }),
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

const pages = defineCollection({
  loader: glob({ base: './content/pages', pattern: '**/*.md' }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { posts, pages };
