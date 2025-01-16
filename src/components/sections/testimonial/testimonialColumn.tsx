'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { TestimonialType } from './testimonial';

interface TestimonialColumnProps {
  testimonials: TestimonialType;
  className?: string;
  reverse?: boolean;
}

export default function TestimonialColumn({
  testimonials,
  className,
  reverse,
}: TestimonialColumnProps) {
  return (
    <motion.div
      initial={{
        y: reverse ? '-50%' : 0,
      }}
      animate={{
        y: reverse ? 0 : '-50%',
      }}
      transition={{
        duration: 65,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={twMerge('flex flex-col gap-4 pb-4', className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {testimonials.map((testimonial, index) => (
            <blockquote key={`${i}-${index}`} className="bg-muted/50 shadow-sm">
              <div
                className="prose dark:prose-invert text-muted-foreground text-sm"
                dangerouslySetInnerHTML={{ __html: testimonial.description }}
              />
              <div className="mt-4 flex items-center gap-2">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div>
                  <cite className="text-sm font-medium not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
