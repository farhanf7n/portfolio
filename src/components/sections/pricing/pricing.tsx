'use client';

import { motion } from 'framer-motion';

import BlurFade from '@/components/magicui/blur-fade';
import { PricingCard } from '@/components/sections/pricing/pricing-card';
import { useSectionInView } from '@/hooks/use-section-in-view';

const BLUR_FADE_DELAY = 0.04;

export const Pricing = () => {
  const { ref } = useSectionInView('Pricing');

  return (
    <section
      ref={ref}
      id="pricing"
      className="my-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        Customized offers for your project
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-[56ch] text-left leading-loose"
      >
        In a constantly evolving digital world, every project is unique and
        requires customized solutions. That&apos;s why I&apos;ve created
        &apos;Tailored Offers&apos; that adapt to your specific needs, no matter
        the complexity of your project. Whether you need flexibility in
        duration, specialized services, or customized rates, I&apos;m here to
        help you achieve your goals. Discover how we can collaborate and take
        your vision to the next level
      </motion.p>

      <BlurFade className="mt-8" delay={BLUR_FADE_DELAY * 11}>
        <PricingCard />
      </BlurFade>
    </section>
  );
};
