'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      className={cn('', className)}
    >
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ''}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-2"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                <div
                  className={cn(
                    'relative flex items-center space-x-2 rounded-lg p-4 transition-colors',
                    openItem === item.id.toString()
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted hover:bg-primary/10',
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        'absolute bottom-6',
                        item.iconPosition === 'right' ? 'right-0' : 'left-0'
                      )}
                      style={{
                        transform:
                          item.iconPosition === 'right'
                            ? 'rotate(7deg)'
                            : 'rotate(-4deg)',
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="text-base font-medium tracking-tight">
                    {item.question}
                  </span>
                </div>

                <span
                  className={cn(
                    'text-muted-foreground',
                    openItem === item.id.toString() && 'text-primary'
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="size-5" />
                  ) : (
                    <Plus className="size-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? 'open' : 'collapsed'}
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="ml-7 mt-2 md:ml-16">
                  <div
                    className={cn(
                      'bg-primary text-muted-foreground relative rounded-lg p-4 text-left leading-loose',
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </motion.div>
  );
}
