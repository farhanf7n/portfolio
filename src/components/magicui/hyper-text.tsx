/* eslint-disable prettier/prettier */
'use client';

import { useEffect, useRef, useState } from 'react';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface HyperTextProps {
  /** Text to be animated */
  text: string;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Custom Framer Motion variants */
  framerProps?: Variants;
  /** Additional CSS classes */
  className?: string;
  /** Whether to animate on initial load */
  animateOnLoad?: boolean;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(text.split(''));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef<number>(0);
  const isFirstRender = useRef<boolean>(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === ' '
                ? l
                : i <= interations.current
                  ? text[i]
                  : alphabets[getRandomInt(26)]
            )
          );
          interations.current = interations.current + 0.1;
        } else {
          setTrigger(false);
          clearInterval(interval);
        }
      },
      duration / (text.length * 10)
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div
      className="flex scale-100 cursor-default overflow-hidden py-2"
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.h1
            className={cn('font-mono', letter === ' ' ? 'w-3' : '', className)}
            key={i}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
