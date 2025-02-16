import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email'),
  service: z.string().trim().min(1, 'Service is required'),
  source: z.string().trim().min(1, 'Source is required'),
  budget: z.coerce
    .number({
      required_error: 'Budget is required',
      invalid_type_error: 'Budget must be a number',
    })
    .min(1, 'Budget must be greater than 0'),
  country: z.string().trim().min(1, 'Country is required'),
  message: z.string().trim().min(1, 'Message is required'),
});

export type TFormSchema = z.infer<typeof formSchema>;
