'use client';

import { motion } from 'framer-motion';

import { FaqAccordion } from './faq-chat-accordion';

import { useSectionInView } from '@/hooks/use-section-in-view';

export type FaqItem = {
  answer: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  id: number;
  question: string;
};

const defaultData: FaqItem[] = [
  {
    answer:
      'I craft stunning UI designs and develop high-performing websites from scratch. Whether you need a sleek landing page, a fully custom web app, or expert design and development consulting—I’ve got you covered. With a deep understanding of Vanilla JS, React, Next.js, and Node.js, I build seamless, scalable, and visually striking digital experiences.',
    icon: '🗃️',
    iconPosition: 'left',
    id: 1,
    question: 'What services do you offer exactly?',
  },
  {
    answer:
      'No. I like to get involved early in the process to ensure a smooth workflow between design & development and to identify potential difficulties from the dev-end.',
    icon: '🗾',
    iconPosition: 'right',
    id: 2,
    question: 'Do you require finalized designs when reaching out?',
  },
  {
    answer:
      'I primarily work with technology and design-driven companies — from startups to Fortune 500.',
    icon: '🏛️',
    iconPosition: 'left',
    id: 3,
    question: 'Which companies do you work with?',
  },
  {
    answer:
      'Most of my projects range between $2,000 and $25,000. My minimum engagement fee is $1,500',
    icon: '💳',
    iconPosition: 'right',
    id: 4,
    question: 'How much does a project cost?',
  },
  {
    answer:
      'Yes. I am based in Pakistan and have clients in the US, Germany, Canada, England, Australia, New Zealand, Italy, France, and Switzerland.',
    icon: '🗺️',
    iconPosition: 'left',
    id: 5,
    question: 'Do you work internationally?',
  },
  {
    answer:
      'I use 30% (Upfront) - 40% (Midway) - 30 (After Launch) phased approach for medium size projects. However, for short or quick tasks, I accept payment only when the project is completed.',
    icon: '👣',
    iconPosition: 'right',
    id: 6,
    question: 'What are the payment terms for a project?',
  },
  {
    answer:
      'Most of my projects are typically completed within 2 weeks to 2 months, depending on their complexity and scope. For smaller or quicker tasks, I can often deliver results within just a few hours.',
    icon: '⌛',
    iconPosition: 'left',
    id: 7,
    question: 'How long does a project take?',
  },
  {
    answer: 'Yes, I do fixed-fee projects with a minimum size of one page.',
    icon: '🍂',
    iconPosition: 'right',
    id: 8,
    question: 'Do you take on small hourly work?',
  },
];

function Faq() {
  const { ref } = useSectionInView('FAQ');
  return (
    <section ref={ref} className="my-10 w-full max-w-xl sm:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        <span className="font-bold dark:text-[#e8ff85]">Frequently Asked</span>{' '}
        Clearly Answered
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground mb-4 max-w-[56ch] text-left leading-loose"
      >
        Check here before you ask—we&apos;ve got the answers.
      </motion.p>
      <FaqAccordion
        data={defaultData}
        className="w-full max-w-xl"
        questionClassName="bg-secondary hover:bg-secondary/80"
        answerClassName="bg-secondary text-secondary-foreground"
      />
    </section>
  );
}

export { Faq, FaqAccordion };
