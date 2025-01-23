/* eslint-disable prettier/prettier */
'use client';

import { useRef } from 'react';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion, useInView } from 'framer-motion';

interface BlurFadeProps {
  /**
   *
   */
  blur?: string;
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  delay?: number;
  /**
   *
   */
  duration?: number;
  /**
   *
   */
  inView?: boolean;
  /**
   *
   */
  inViewMargin?: string;
  /**
   *
   */
  variant?: {
    /**
     *
     */
    hidden: {
      /**
       *
       */
      y: number;
    };
    /**
     *
     */
    visible: {
      /**
       *
       */
      y: number;
    };
  };
  /**
   *
   */
  yOffset?: number;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as unknown as undefined,
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
        exit="hidden"
        initial="hidden"
        ref={ref}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        variants={combinedVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
