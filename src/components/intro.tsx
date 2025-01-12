'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col gap-4 text-center sm:mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-lg text-left"
      >
        I&apos;m Farhan Ahmed, a curious designer, coder. Currently working as a
        Freelance Developer & Designer, but always exploring the limitless
        possibilities of creativity and technology.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-lg text-left"
      >
        I thrive on transforming ideas into reality, whether it&apos;s crafting
        digital interfaces, designing immersive visuals, or building websites
        that feel effortless to use.
      </motion.p>
    </section>
  );
};
