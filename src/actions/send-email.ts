'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({
  name,
  email,
  service,
  source,
  budget,
  country,
  message,
}: TFormSchema) => {
  if (!env.RESEND_API_KEY) {
    return {
      error: 'Email service is not configured',
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['farhanf7n@gmail.com'],
      subject: `Message from ${name} via contact form`,
      replyTo: email,
      text: `
      Name: ${name}
      Email: ${email}
      Service Needed: ${service}
      Source: ${source}
      Budget: $${budget?.toLocaleString() ?? 'Not specified'}
      Country: ${country}
      Message: ${message}
      `,
    });

    if (data.error) {
      throw new Error(data.error.message || 'Failed to send email');
    }

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? `Failed to send email: ${error.message}`
          : 'Something went wrong while sending the email',
    };
  }
};
