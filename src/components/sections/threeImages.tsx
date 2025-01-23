'use client';
import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ThreeImages({
  className,
  ...props
}: ComponentProps<'section'>) {
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
  ];

  return (
    <section className={clsx(className, 'content my-14')} {...props}>
      <div className="relative flex h-full flex-col items-start justify-center gap-10">
        <div className="flex flex-row">
          {images.map((image, idx) => (
            <motion.div
              variants={imageVariants}
              key={'images-first' + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="-mr-4 mt-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <Image
                src={image}
                alt={image}
                height={198}
                width={350}
                className="h-[198px] w-[350px] shrink-0 rounded-lg object-cover md:size-40"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
