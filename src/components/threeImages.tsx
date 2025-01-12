'use client';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ThreeImages({
  className,
  ...props
}: ComponentProps<'section'>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-12, 0]);

  return (
    <section className={clsx(className, 'content my-14')} {...props} ref={ref}>
      <div className="flex flex-wrap gap-2">
        <motion.div
          style={{ rotate: rotate1 }}
          className="flex flex-col p-3 border-1 border-gray-200 rounded-md w-[260px] h-[285px] overflow-hidden"
        >
          <motion.img
            className="object-cover w-full h-full rounded-md"
            src="/gallery1.jpg"
            alt="About 1"
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate2 }}
          className="flex flex-col p-3 border-1 border-gray-200 rounded-md w-[260px] h-[285px]"
        >
          <img
            className="object-cover w-full h-full rounded-md"
            src="/gallery2.jpg"
            alt="About 2"
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate3 }}
          className="flex flex-col p-3 border-1 border-gray-200 rounded-md w-[260px] h-[285px]"
        >
          <img
            className="object-cover w-full h-full rounded-md"
            src="/gallery3.jpg"
            alt="About 3"
          />
        </motion.div>

        <motion.div
          style={{ rotate: rotate4 }}
          className="flex flex-col p-3 border-1 border-gray-200 rounded-md w-[260px] h-[285px]"
        >
          <img
            className="object-cover w-full h-full rounded-md"
            src="/gallery4.jpg"
            alt="About 4"
          />
        </motion.div>
      </div>
    </section>
  );
}
