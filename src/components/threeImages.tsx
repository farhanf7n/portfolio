'use client';
import type { ComponentProps } from 'react';
import { useRef } from 'react';
import { clsx } from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function ThreeImages({
  className,
  ...props
}: ComponentProps<'section'>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-4, 0]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-4, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [4, 0]);

  return (
    <section className={clsx(className, 'content my-14')} {...props} ref={ref}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          style={{ rotate: rotate1 }}
          className="overflow-hidden rounded-md border border-gray-200/50 p-3 dark:border-white/30"
        >
          <Image
            className="size-full rounded-md object-cover"
            src="/gallery1.jpg"
            alt="About 1"
            width={260}
            height={285}
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate2 }}
          className="overflow-hidden rounded-md border border-gray-200/50 p-3 dark:border-white/30"
        >
          <Image
            className="size-full rounded-md object-cover"
            src="/gallery2.jpg"
            alt="About 2"
            width={260}
            height={285}
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate3 }}
          className="overflow-hidden rounded-md border border-gray-200/50 p-3 dark:border-white/30"
        >
          <Image
            className="size-full rounded-md object-cover"
            src="/gallery3.jpg"
            alt="About 3"
            width={260}
            height={285}
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate4 }}
          className="overflow-hidden rounded-md border border-gray-200/50 p-3 dark:border-white/30"
        >
          <Image
            className="size-full rounded-md object-cover"
            src="/gallery4.jpg"
            alt="About 4"
            width={260}
            height={285}
          />
        </motion.div>
      </div>
    </section>
  );
}
