'use client';

import { motion } from 'framer-motion';

import { LogoCarousel } from './LogoCarousel';

import { skillsData } from '@/lib/data';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export const Skills = () => {
  const isMobile = useBreakpoint(640); // 640px is Tailwind's 'sm' breakpoint
  const logos = skillsData.map((item) => ({
    name: item.name,
    id: item.id,
    img: item.img,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileInView="animate"
      viewport={{ once: true }}
      className="flex w-full max-w-xl flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between"
    >
      <div className="my-3 flex w-full justify-center">
        <LogoCarousel logos={logos} columnCount={isMobile ? 3 : 5} />
      </div>
    </motion.div>
  );
};
