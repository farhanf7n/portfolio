'use client';
import styles from '../layout.module.css';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Page() {
  return (
    <>
      {/* Aura Effect */}
      <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
        <div className="content relative h-full">
          <div
            className={clsx(
              styles.auraMask,
              'absolute left-[-100%] z-negative h-full w-[300%] overflow-hidden opacity-50 [--aura-rainbow-offset:-20%] dark:opacity-30 sm:[--aura-rainbow-offset:-15%] md:left-[-150%] md:w-[400%] md:[--aura-offset:-10%]'
            )}
          >
            <div
              className={clsx(
                styles.auraRaysMask,
                'absolute inset-0 flex items-center'
              )}
            >
              <div
                className={clsx(
                  styles.auraRainbowGradient,
                  'absolute left-[-10%] aspect-square w-[120%]'
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center">
        <Navbar />
        {/* BLogs */}
        <section className="mx-auto my-10 w-full max-w-md lg:max-w-none">
          <div className="mx-auto w-full max-w-xl grow">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
            >
              Learning,{' '}
              <span className="font-bold dark:text-[#e8ff85]">
                Building, and Documenting
              </span>{' '}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
              className="text-muted-foreground max-w-[56ch] text-left leading-loose"
            >
              A casual collection of my brain&apos;s best moments. I don&apos;t
              write much, but when I do, I make it count. Or at least, I try.
            </motion.p>
          </div>
        </section>

        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
