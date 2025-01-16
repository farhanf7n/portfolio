/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
'use client';

import { pricingData } from '@/lib/data';

export const PricingCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {pricingData.map((pricing, index) => (
        <div
          key={index}
          className="dark:bg-secondary/80 relative grid grid-cols-[1fr,auto] gap-4 overflow-hidden rounded-lg bg-white p-6 shadow-sm"
        >
          <div className="space-y-2">
            <p className="focus:ring-ring bg-secondary text-muted-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-1 py-0 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
              {pricing.tagLine}
            </p>
            <h2 className="mt-1 text-base font-semibold tracking-tight">
              {pricing.title}
            </h2>
            <p className="prose dark:prose-invert text-muted-foreground text-sm">
              {pricing.description}
            </p>
          </div>
          <div className="absolute -right-6 -top-6 shrink-0 -rotate-[27deg]">
            {pricing.icon}
          </div>
        </div>
      ))}
    </div>
  );
};
