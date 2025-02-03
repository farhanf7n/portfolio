'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'farhanf7n@gmail.com',
      subject: `Message from ${name} via contact form`,
      replyTo: email,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: 'Something went wrong!',
    };
  }
};
