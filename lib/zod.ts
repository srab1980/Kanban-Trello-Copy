import * as z from 'zod';

export const boardSchema = z.object({
  title: z.string().min(1),
  imageUrl: z.string().url().optional()
});

export const listSchema = z.object({
  title: z.string().min(1),
  order: z.number()
});

export const cardSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  order: z.number()
});
