'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { sendEmail } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

const serviceOptions = [
  'Web Development',
  'Frontend Development',
  'Full Stack Development',
  'UI/UX Design',
  'Consulting',
];

const sourceOptions = [
  'Google',
  'GitHub',
  'LinkedIn',
  'Twitter',
  'Portfolio Website',
  'Referral',
  'Other',
];

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: TFormSchema) => {
    console.log('Form values before submission:', values);
    const { data, error } = await sendEmail(values);

    if (error) {
      console.error('Error sending email:', error);
      toast.error(error);
      return;
    }

    console.log('Email sent successfully:', data);
    toast.success(data);
    reset();
  };

  const copyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText('farhanf7n@gmail.com')
      .then(() => toast.success('Email copied to clipboard!'))
      .catch(() => toast.error('Failed to copy email'));
  };

  return (
    <motion.section
      ref={ref}
      className="my-10 w-full max-w-xl"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        <span className="font-bold dark:text-[#e8ff85]">Contact</span> Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground mb-4 max-w-[56ch] text-left leading-loose"
      >
        Interested in working together? Contact me at{' '}
        <Button
          variant="link"
          className="text-muted-foreground p-0 font-medium underline"
        >
          <a
            className="underline-offset-4"
            href="mailto:farhanf7n@gmail.com"
            onClick={copyEmail}
          >
            farhanf7n@gmail.com
          </a>
        </Button>{' '}
        or through this form.
      </motion.p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="name"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.name?.message && 'text-destructive'
              )}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              {...register('name')}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.name?.message && 'border-destructive'
              )}
            />
            {errors.name?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="email"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.email?.message && 'text-destructive'
              )}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@gmail.com"
              {...register('email')}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.email?.message && 'border-destructive'
              )}
            />
            {errors.email?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="service"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.service?.message && 'text-destructive'
              )}
            >
              What do you need?
            </label>
            <select
              id="service"
              {...register('service')}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.service?.message && 'border-destructive'
              )}
            >
              <option value="">Select Service...</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.service?.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="source"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.source?.message && 'text-destructive'
              )}
            >
              Where did you find me?
            </label>
            <select
              id="source"
              {...register('source')}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.source?.message && 'border-destructive'
              )}
            >
              <option value="">Select Option...</option>
              {sourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.source?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.source?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="budget"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.budget?.message && 'text-destructive'
              )}
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              min="1"
              step="1"
              placeholder="Enter budget in USD"
              {...register('budget', {
                setValueAs: (value) =>
                  value === '' ? undefined : parseInt(value, 10),
              })}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.budget?.message && 'border-destructive'
              )}
            />
            {errors.budget?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.budget?.message}
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="country"
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                errors.country?.message && 'text-destructive'
              )}
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Write country name"
              {...register('country')}
              className={cn(
                'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                errors.country?.message && 'border-destructive'
              )}
            />
            {errors.country?.message && (
              <p className="text-destructive mt-1 text-sm">
                {errors.country?.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="message"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.message?.message && 'text-destructive'
            )}
          >
            Project Brief
          </label>
          <textarea
            id="message"
            placeholder="Tell me more about your project. Please include details like goals, timeline, and design links if available."
            {...register('message')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.message?.message && 'border-destructive'
            )}
          ></textarea>
          {errors.message?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.message?.message}
            </p>
          )}
        </div>
        <Button size="lg">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
