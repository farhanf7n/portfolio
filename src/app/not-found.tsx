import styles from './layout.module.css';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NotFound() {
  return (
    <>
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

      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
        <Navbar />
        <div className="flex min-h-[500px] flex-col px-4 py-32 text-left">
          <div className="border-l-[6px] border-l-[#e8ff85] pl-5">
            <h1 className="text-muted-foreground mb-2 text-5xl font-semibold">
              Oops!
            </h1>
            <p className="text-muted-foreground text-base">
              You found a secret level! Just kidding, this page doesn&apos;t
              exist. 👀
            </p>
          </div>
          <Image
            src="/oops.webp"
            alt="404 Error Illustration"
            width={800}
            height={400}
            className="mt-7 rounded-xl"
            priority
          />

          <div className="mt-7 flex justify-start">
            <Link className="cubic-btn rounded-md py-3" href="/">
              <span data-text="Lost? Me too!">
                <p className="inner">Let&apos;s Go Home</p>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
