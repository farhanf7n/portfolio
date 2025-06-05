'use client';
import styles from '../layout.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { Contact } from '@/components/sections/contact';
import { ThemeToggle } from '@/components/theme-toggle';

const ContactPage = async () => {
  return (
    <>
      {/* Aura Background */}
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
      <div className="container relative flex flex-col items-center">
        <Navbar />

        <Contact />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          <a
            aria-label="Twitter (or X)"
            className="focusable text-twitter hover:text-twitter/50 hover:shadow-twitter/5 focus-visible:ring-twitter/40 dark:text-twitter-dark dark:hover:text-twitter-dark/50 dark:focus-visible:ring-twitter-dark/40 -ml-2.5 flex size-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition"
            href="https://x.com/farhanf7n"
            rel="me noreferrer"
            target="_blank"
            title="Twitter (or X)"
          >
            <svg
              className="[transform:scaleY(-1)]"
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            aria-label="Linkedin"
            className="focusable group -ml-2.5 flex size-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition"
            href="https://linkedin.com/in/farhanf7n"
            rel="me noreferrer"
            target="_blank"
            title="Linkedin"
          >
            <svg
              className="h-5 opacity-100 transition-opacity duration-200 ease-in-out group-hover:opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                fill="#0076B2"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              />
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              />
            </svg>
          </a>
          <a
            aria-label="GitHub"
            className="focusable text-github hover:text-github/50 hover:shadow-github/5 focus-visible:ring-github/40 dark:text-github-dark dark:hover:text-github-dark/50 dark:focus-visible:ring-github-dark/40 -ml-2.5 flex size-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition"
            href="https://github.com/farhanf7n"
            rel="me noreferrer"
            target="_blank"
            title="GitHub"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            aria-label="Dribbble"
            className="focusable text-dribbble hover:text-dribbble/50 hover:shadow-dribbble/5 focus-visible:ring-dribbble/40 dark:text-dribbble-dark dark:hover:text-dribbble-dark/50 dark:focus-visible:ring-dribbble-dark/40 -ml-2.5 flex size-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition"
            href="https://dribbble.com/farhanf7n"
            rel="me noreferrer"
            target="_blank"
            title="Dribbble"
          >
            <svg
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M20.13 11.42a8.12 8.12 0 0 0-1.83-4.6 11.91 11.91 0 0 1-4.49 3.3c.2.41.39.83.57 1.24a17.9 17.9 0 0 1 5.75.06Zm-7.2-3.01a38.67 38.67 0 0 0-2.79-4.35 8.12 8.12 0 0 1 6.75 1.42 10.02 10.02 0 0 1-3.96 2.93Zm-1.86.65a37.07 37.07 0 0 0-2.83-4.3 8.17 8.17 0 0 0-4.13 5.18c2.68-.02 5-.32 6.96-.88ZM3.84 12c0 1.86.64 3.67 1.8 5.11a12.95 12.95 0 0 1 6.82-5.3 35.5 35.5 0 0 0-.47-1c-2.29.7-5 1.06-8.14 1.08l-.01.11Zm3.22 6.49a8.09 8.09 0 0 0 7.8 1.15 32.25 32.25 0 0 0-1.66-6.03c-2.5.77-4.53 2.4-6.14 4.88Zm9.6.2a8.17 8.17 0 0 0 3.38-5.33 16.6 16.6 0 0 0-4.92-.16 34.34 34.34 0 0 1 1.54 5.5ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            className="focusable -ml-2.5 flex size-10 flex-none cursor-pointer items-center justify-center gap-2 rounded-full font-medium text-red-500 transition hover:text-red-500/50 hover:shadow-red-500/5 focus-visible:ring-red-500/40 dark:text-red-400 dark:hover:text-red-400/50 dark:focus-visible:ring-red-400/40"
            href="mailto:farhanf7n@gmail.com"
            title="Email"
          >
            <svg
              aria-label="Email"
              height="24"
              role="presentation"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
      <ScrollProgressIndicator />
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default ContactPage;
