'use client';

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 64 }}
      transition={{
        delay: 0.125,
        height: {
          duration: 0.5,
          ease: 'easeOut',
        },
      }}
      style={{
        backgroundImage: 'linear-gradient(to top, #e8ff85, transparent)',
      }}
      className="m-auto my-5 w-[1px] rounded-full"
    ></motion.div>
  );
};
