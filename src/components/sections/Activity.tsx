import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { LatestFilms } from '@/components/sections/LatestFilms';
import { LatestSongs } from '@/components/sections/LatestSongs';

const NUMBER_OF_ACTIVITIES = 3;

/**
 * A section displaying my latest listens and watches.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function Activity({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section className={clsx(className, 'content w-full max-w-xl')} {...props}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        <span className="font-bold dark:text-[#e8ff85]">Activity</span>
      </motion.h1>

      <p className="dark:text-gray-350 max-w-[46ch] leading-relaxed text-gray-500">
        What I&apos;ve recently{' '}
        <a
          className="link text-gray-800 dark:text-white"
          href="https://www.last.fm/user/farhanf7n"
          rel="noreferrer"
          target="_blank"
        >
          listened to
        </a>{' '}
        and{' '}
        <a
          className="link text-gray-800 dark:text-white"
          href="https://letterboxd.com/farhanf7n/"
          rel="noreferrer"
          target="_blank"
        >
          watched
        </a>
        .
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <LatestSongs
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
        <LatestFilms
          className="min-w-0 max-w-full"
          limit={NUMBER_OF_ACTIVITIES}
        />
      </div>
    </section>
  );
}
