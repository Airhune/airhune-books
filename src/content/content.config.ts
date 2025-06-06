import { defineCollection, z } from "astro:content";

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string(),
    description: z.string(),
    img: z.string(),
    readtime: z.number(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

export const collections = { books: booksCollection };
