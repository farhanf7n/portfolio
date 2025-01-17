/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

import { pricingData } from '@/lib/data';

export const PricingCard = () => {
  return (
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
              <div className="text-sm font-semibold">{pricing.duration}</div>
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
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 15H27C28.6568 15 30 16.3431 30 18M24 15H21C19.3431 15 18 16.3431 18 18V19C18 20.6568 19.3431 22 21 22H27C28.6568 22 30 23.3432 30 25V26C30 27.6568 28.6568 29 27 29H24M24 15V12M24 29H21C19.3431 29 18 27.6568 18 26M24 29V32"
                stroke="#E8FF85"
                stroke-opacity="0.3"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};
