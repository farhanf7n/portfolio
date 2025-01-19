import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
