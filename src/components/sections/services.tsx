/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { motion } from 'framer-motion';

import BlurFade from '@/components/magicui/blur-fade';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { servicesData } from '@/lib/data';

const BLUR_FADE_DELAY = 0.04;

export const Services = () => {
  const { ref } = useSectionInView('Services');

  return (
    <section className="my-10 flex w-full max-w-xl scroll-mt-32 flex-col gap-4 sm:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        How Can <span className="font-bold dark:text-[#e8ff85]">I Help?</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-[56ch] text-left leading-loose"
      >
        Let&apos;s turn your vision into something amazing.
      </motion.p>

      <BlurFade className="mt-8" delay={BLUR_FADE_DELAY * 11}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="dark:bg-secondary/80 group relative grid grid-cols-[1fr,auto] gap-4 overflow-hidden rounded-lg bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <p className="focus:ring-ring bg-secondary text-muted-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-1 py-0 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                  {service.tagLine}
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="prose dark:prose-invert text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
              <div className="absolute -right-6 -top-6 shrink-0 -rotate-[27deg] transition-all duration-500 ease-out group-hover:-rotate-[31deg]">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
};
