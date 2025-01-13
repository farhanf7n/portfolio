'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ReactNode } from 'react';

interface HoverTooltipProps {
  children: ReactNode;
  content: string;
}

export function HoverTooltip({ children, content }: HoverTooltipProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={10}
          className="bg-muted text-secondary-foreground z-[99999] text-xs dark:bg-gray-500/60"
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
