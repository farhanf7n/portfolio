'use client';

import { motion } from 'framer-motion';

import BlurFade from '@/components/magicui/blur-fade';
import { ServiceCard } from '@/components/sections/services/service-card';
import { useSectionInView } from '@/hooks/use-section-in-view';

const BLUR_FADE_DELAY = 0.04;

export const Services = () => {
  const { ref } = useSectionInView('Services');

  return (
    <section
      ref={ref}
      id="services"
      className="my-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-20"
    >
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
        <ServiceCard />
      </BlurFade>
    </section>
  );
};
