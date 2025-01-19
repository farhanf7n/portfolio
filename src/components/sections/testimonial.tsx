'use client';

import { motion } from 'framer-motion';

import TestimonialColumn from '@/components/sections/testimonialColumn';

const testimonials = [
  {
    name: 'John Allsopp',
    role: 'Web Directions',
    avatar: '/john.jpg',
    description:
      '<p>Farhan Ahmed has quickly become <strong>an authority on developing with CSS</strong></p>',
  },
  {
    name: 'Chris Coyier',
    role: 'formally CSS tricks, Codepen',
    avatar: '/chris.jpeg',
    description:
      '<p>I really wanna support Farhan because he really got the #1 gold star ⭐️ for CSS blogging this year. <strong>Every post of his was an extremely well done deep dive into some important area of CSS</strong>.</p>',
  },
  {
    name: 'Kevin Powell',
    role: 'CSS Evangelist',
    avatar: '/kevin.jpg',
    description:
      '<p><strong>Farhan&apos;s blog is a source of Knowledge and inspiration</strong>, with in-depth explorations of topics, including great visuals and use cases.</p>',
  },
  {
    name: 'Addy Osmani',
    role: 'Engineering, Google Chrome',
    avatar: '/addy.jpg',
    description:
      '<p><strong>Thank you for setting the quality bar so high</strong> for technical blog posts, Farhan. <strong>I am constantly flabbergasted at how good each of your write-ups are; digestable, visual, memorable. Great stuff</strong>.</p>',
  },
  {
    name: 'Una Kravets',
    role: 'Web UI DevRel Lead, Google',
    avatar: '/una.jpg',
    description:
      '<p>I&apos;m always excited to see new content come from Farhan. <strong>He does an amazing job showcasing modern UI capabilities with clear visuals, interactive demos, and practical examples.</strong> Thank you for your contributions to the front-end community!</p>',
  },
  {
    name: 'Vitaly Friedman',
    role: 'Founder, Smashing Magazine',
    avatar: '/vitaly.jpg',
    description:
      '<p>Farhan is a very knowledgeable, passionate and kind expert in pretty much everything CSS! His expertise goes deep, and his insights are always helpful, practical and generous. <strong>If you are looking for somebody who has a very profound understanding of CSS, Farhan is just the right person!</strong></p>',
  },
  {
    name: 'Josh W. Comeau',
    role: 'Indie hacker and educator',
    avatar: '/josh.jpg',
    description:
      '<p>Farhan&apos;s work is <strong>so friggin good 💯</strong>.</p>',
  },
  {
    name: 'Andy Bell',
    role: 'Set Studio, Piccalilli',
    avatar: '/andy.jpeg',
    description:
      '<p>I&apos;m an Farhan Ahmed super fan, I&apos;m not going to shy away from that. This is because <strong>Farhan is one of the best in the biz at explaining CSS capabilities</strong>.</p>',
  },
  {
    name: 'Trung Vo',
    role: 'Engineering Manager',
    avatar: '/trung.jpg',
    description:
      '<p>Hey Farhan! Just wanted to drop by and say that your technical blog posts are amazing. <strong>Seriously, your ability to explain complex concepts in such a clear and memorable way is really impressive</strong>.</p>',
  },
  {
    name: 'Sacha Greif',
    role: 'SidebarIO Newsletter',
    avatar: '/sacha.jpg',
    description:
      '<p><strong>Farhan&apos;s frontend development knowledge alone already makes him one of the top CSS experts out there</strong> – but it&apos;s the added care and research he puts into any topic he covers that have made his blog into <strong>my favorite CSS resource, bar none.</strong></p>',
  },
] as const;

export type TestimonialType = (typeof testimonials)[number][];

export default function Testimonial() {
  return (
    <section className="my-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        What People Say{' '}
        <span className="font-bold dark:text-[#e8ff85]">About Me</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground mb-8 max-w-[56ch] text-left leading-loose"
      >
        I&apos;m humbled and grateful to have received these kind words from
        some of the most respected names in the tech industry.
      </motion.p>
      <div className="grid h-[500px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0">
        <TestimonialColumn testimonials={[...testimonials]} />
        <TestimonialColumn
          testimonials={[...testimonials].reverse()}
          reverse={true}
          className="hidden md:flex"
        />
      </div>
    </section>
  );
}
