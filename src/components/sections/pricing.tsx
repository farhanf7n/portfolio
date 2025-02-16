/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

import BlurFade from '@/components/magicui/blur-fade';
import { SectionDivider } from '@/components/section-divider';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { pricingData } from '@/lib/data';

const BLUR_FADE_DELAY = 0.04;

export const Pricing = () => {
  const { ref } = useSectionInView('Pricing');

  return (
    <section className="my-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        <span className="font-bold dark:text-[#e8ff85]">Customized offers</span>{' '}
        for your project
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-[56ch] text-left leading-loose"
      >
        In a constantly evolving digital world, every project is unique and
        requires customized solutions. That&apos;s why I&apos;ve created
        &apos;Tailored Offers&apos; that adapt to your specific needs, no matter
        the complexity of your project. Whether you need flexibility in
        duration, specialized services, or customized rates, I&apos;m here to
        help you achieve your goals. Discover how we can collaborate and take
        your vision to the next level
      </motion.p>

      <BlurFade className="mt-8" delay={BLUR_FADE_DELAY * 11}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pricingData.map((pricing, index) => (
            <Link
              href={pricing.href}
              key={index}
              target="_blank"
              style={{ backgroundColor: pricing.bgColor }}
              className="group relative overflow-hidden rounded-lg p-6 text-[#292929] shadow-sm transition-colors"
            >
              <div className="space-y-2">
                <p className="focus:ring-ring bg-secondary text-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-1 py-0 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                  {pricing.tagLine}
                </p>
                <h2 className="mt-1 text-base font-medium tracking-tight">
                  Plan <span className="font-bold">{pricing.planName}</span>
                </h2>
                <p className="prose dark:prose-invert  text-sm">
                  {pricing.description}
                </p>
              </div>
              <hr className="my-4 opacity-50" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col">
                  <div className="text-sm">Price</div>
                  <div className="text-lg font-bold">{pricing.price}</div>
                  <div className="text-sm font-semibold">
                    {pricing.duration}
                  </div>
                </div>
                <MoveUpRight className="bg-secondary text-foreground size-10 rounded-full p-3 transition-all duration-500 ease-out hover:scale-105 group-hover:-translate-y-1" />
              </div>
              <div className="absolute -right-11 -top-7 shrink-0 -rotate-[27deg] opacity-50 transition-all duration-500 ease-out group-hover:-rotate-[31deg]">
                <svg
                  className="size-32"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.88 43.0248L18.0583 40.6146C17.0883 40.0028 16.6033 39.697 16.0651 39.6794C15.4834 39.6602 14.9899 39.9536 13.9417 40.6146C12.7679 41.3548 10.4337 43.3942 8.9239 42.4216C8 41.8266 8 40.315 8 37.2916V16C8 10.3432 8 7.51472 9.65398 5.75736C11.308 4 13.97 4 19.2941 4H28.7058C34.03 4 36.692 4 38.346 5.75736C40 7.51472 40 10.3432 40 16V37.2916C40 40.315 40 41.8266 39.076 42.4216C37.5662 43.3942 35.2322 41.3548 34.0582 40.6146C33.0882 40.0028 32.6034 39.697 32.065 39.6794C31.4834 39.6602 30.9898 39.9536 29.9418 40.6146L26.12 43.0248C25.089 43.6748 24.5736 44 24 44C23.4264 44 22.9108 43.6748 21.88 43.0248Z"
                    fill="#2B2D22"
                    stroke="#2B2D22"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 15H27C28.6568 15 30 16.3431 30 18M24 15H21C19.3431 15 18 16.3431 18 18V19C18 20.6568 19.3431 22 21 22H27C28.6568 22 30 23.3432 30 25V26C30 27.6568 28.6568 29 27 29H24M24 15V12M24 29H21C19.3431 29 18 27.6568 18 26M24 29V32"
                    stroke="#E8FF85"
                    strokeOpacity="0.3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </BlurFade>

      <SectionDivider />

      <BlurFade className="my-8" delay={BLUR_FADE_DELAY * 12}>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left text-3xl font-normal leading-tight tracking-tighter sm:text-4xl"
        >
          None of the{' '}
          <span className="font-bold dark:text-[#e8ff85]">plans</span> suit your{' '}
          <span className="font-bold dark:text-[#e8ff85]">needs?</span>
        </motion.h1>
        <div className=" grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div className="flex size-full flex-col justify-center gap-4 ">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
              className="text-muted-foreground max-w-[56ch] text-left leading-loose"
            >
              If none of the proposed plans suits your needs, don&apos;t
              hesitate to contact us. We are willing to negotiate a customized
              solution that aligns with your goals. Your satisfaction is our
              priority.
            </motion.p>
            <div>
              <Link
                className="cubic-btn h-9 w-36 justify-center rounded-md"
                href="/contact"
              >
                <span data-text="Let's talk?">
                  <p className="inner">Let&apos;s talk?</p>
                </span>
              </Link>
            </div>
          </div>
          <Link
            href="https://wa.me/+923091789249?text=Hello!%20I%27m%20interested%20in%20the%20%27Elusive%20Unicorn%27%20Plan.%20As%20a%20customer%20who%20never%20fits%20into%20%27normal%27%20plans%2C%20I%20was%20wondering%20if%20we%20could%20negotiate%20something%20customized"
            target="_blank"
            className="group relative mt-4 inline-block overflow-hidden rounded-lg bg-[#fd8f8f] p-6 text-[#292929] shadow-sm transition-colors"
          >
            <div className="space-y-2">
              <p className="focus:ring-ring bg-secondary text-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-1 py-0 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Design and/or Front-end
              </p>
              <h2 className="mt-1 text-base font-medium tracking-tight">
                Plan <span className="font-bold">Elusive Unicorn</span>
              </h2>
              <p className="prose dark:prose-invert  text-sm">
                Are you the type of client who never fits into
                &apos;standard&apos; plans? Shall we negotiate?
              </p>
            </div>
            <hr className="my-4 opacity-50" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-col">
                <div className="text-sm">Price</div>
                <div className="text-lg font-bold">$??????</div>
                {/* <div className="text-sm font-semibold">Duration?</div> */}
              </div>
              <MoveUpRight className="bg-secondary text-foreground size-10 rounded-full p-3 transition-all duration-500 ease-out hover:scale-105 group-hover:-translate-y-1" />
            </div>
            <div className="absolute -right-11 -top-7 shrink-0 -rotate-[27deg] opacity-50 transition-all duration-500 ease-out group-hover:-rotate-[31deg]">
              <svg
                className="size-32"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.88 43.0248L18.0583 40.6146C17.0883 40.0028 16.6033 39.697 16.0651 39.6794C15.4834 39.6602 14.9899 39.9536 13.9417 40.6146C12.7679 41.3548 10.4337 43.3942 8.9239 42.4216C8 41.8266 8 40.315 8 37.2916V16C8 10.3432 8 7.51472 9.65398 5.75736C11.308 4 13.97 4 19.2941 4H28.7058C34.03 4 36.692 4 38.346 5.75736C40 7.51472 40 10.3432 40 16V37.2916C40 40.315 40 41.8266 39.076 42.4216C37.5662 43.3942 35.2322 41.3548 34.0582 40.6146C33.0882 40.0028 32.6034 39.697 32.065 39.6794C31.4834 39.6602 30.9898 39.9536 29.9418 40.6146L26.12 43.0248C25.089 43.6748 24.5736 44 24 44C23.4264 44 22.9108 43.6748 21.88 43.0248Z"
                  fill="#2B2D22"
                  stroke="#2B2D22"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 15H27C28.6568 15 30 16.3431 30 18M24 15H21C19.3431 15 18 16.3431 18 18V19C18 20.6568 19.3431 22 21 22H27C28.6568 22 30 23.3432 30 25V26C30 27.6568 28.6568 29 27 29H24M24 15V12M24 29H21C19.3431 29 18 27.6568 18 26M24 29V32"
                  stroke="#E8FF85"
                  strokeOpacity="0.3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </BlurFade>
    </section>
  );
};
