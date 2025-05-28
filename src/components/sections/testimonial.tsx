'use client';

import { motion } from 'framer-motion';

import TestimonialColumn from '@/components/sections/testimonialColumn';

const testimonials = [
  {
    name: 'Faizan Kazmi',
    role: 'Frontend Developer @Asintelligence',
    avatar: '/FaizanKazmi.jpeg',
    description: `
    <p>I’ve been working with Farhan for the past 6 months, and honestly — it’s been a roller coaster (in the best way). He’s incredibly fast, and I’m constantly trying to keep up. 😅 Picture this: I’ve been stuck on a problem for 2 hours, and he casually drops a solution while grabbing coffee — <strong>just a hint, and boom, I’m back on track 😂</strong>.</p>
    <p>He’s not just a talented developer — <strong>he’s an amazing team lead</strong>. Supportive, sharp, and always pushing everyone to do better. <strong>Couldn't ask for a better person to work with.</strong></p>
  `,
  },
  {
    name: 'Adeel Javaid',
    role: 'CEO @Career Institute',
    avatar: '/adeeljaved.png',
    description:
      '<p>Farhan was our very first hire, and he exceeded every expectation. <strong>He took full ownership of the website design and transformed it into something truly outstanding. Even though our project was built in PHP — a stack he was not initially familiar with — he took the time to learn it and implemented the entire project within just a week, which was incredibly impressive.</strong> Beyond that, Farhan also taught at our institute and contributed to several other projects, all of which were delivered on time and with great quality. <strong>His dedication, adaptability, and work ethic make him a standout professional, and we were lucky to have him on the team.</strong></p>',
  },
  {
    name: 'Omer Shafique',
    role: 'Sr. Salesforce Developer @Addo AI',
    avatar: '/OmerShafiq.jpeg',
    description:
      '<p>Farhan Ahmed has quickly become <strong>an authority on developing with CSS</strong></p>',
  },
  {
    name: 'Usama Jawad',
    role: 'Lead Frontend Developer @Nutrifactor',
    avatar: '/UsamaJawad.jpeg',
    description:
      '<p>Farhan has a <strong> great eye for clean, modern design. His work is user-friendly, visually appealing, and consistently well-executed.</strong> A solid choice for any design project.</strong></p>',
  },
  {
    name: 'Ali Shan',
    role: 'Sr. Full Stack Developer @Prontex',
    avatar: '/AliShan.jpeg',
    description:
      '<p><strong>Farhan&apos;s blog is a source of Knowledge and inspiration</strong>, with in-depth explorations of topics, including great visuals and use cases.</p>',
  },
  {
    name: 'Bisma Farrukh',
    role: 'UI/UX designer @Flowdezign',
    avatar: '/BismaFarrukh.jpeg',
    description:
      '<p>Farhan is a professional and responsive designer. <strong>He made our website collaboration as easy as it could be and he helped us to get our project completed just as we wanted it!</strong> I highly recommend him for any projects you might be working on, I know we will be working with him again...</p>',
  },
  {
    name: 'Vitaly Friedman',
    role: 'Founder @Smashing Magazine',
    avatar: '/vitaly.jpg',
    description:
      '<p>Farhan is a very knowledgeable, passionate and kind expert in pretty much everything CSS! His expertise goes deep, and his insights are always helpful, practical and generous. <strong>If you are looking for somebody who has a very profound understanding of CSS, Farhan is just the right person!</strong></p>',
  },
  {
    name: 'Arooba Latif',
    role: 'Frontend Developer @Codeavour',
    avatar: '/AroobaLatif.jpg',
    description:
      '<p><strong>Farhan&apos;s frontend development knowledge alone already makes him one of the top CSS experts out there</strong></p>',
  },
  {
    name: 'Purna Gandhi',
    role: 'Brand Strategist @Moonbox',
    avatar: '/PurnaGandhi.jpeg',
    description:
      '<p>Farhan is a <strong>true master of his craft. He brings a rare combination of skills that allow him to take an idea from its earliest spark all the way to a polished, successful product.</strong> From thoughtful design to hands-on coding and seamless execution, he connects all the dots effortlessly. <strong>What sets Farhan apart even more is his leadership. He listens deeply, fosters collaboration, and approaches every idea with curiosity and wisdom.</strong> Being managed by him was not just a professional privilege — it was a personal blessing.</p>',
  },
  {
    name: 'Ali Rizvi',
    role: 'Software Engineer @Axon Technologies',
    avatar: '/AliRizvi.jpeg',
    description:
      '<p><strong>As a backend developer, I know frontend is not exactly my strong suit — like, most of the time. 😂 That is why I always reach out to someone who truly gets it — the guy, the myth: Farhan.</strong> Whenever I need something fresh, cool, or completely revamped, I hit up Farhan — and <strong>he never fails to amaze. The work? Always top-notch. Clean, modern, and just straight-up impressive.</strong></p>',
  },
  {
    name: 'Dylan Kim',
    role: 'Co-founder @MLV Ignite',
    avatar: '/DylanKim.webp',
    description:
      '<p>Beyond standards Farhan grapsed our vision and brought it to life brilliantly.</p>',
  },
  {
    name: 'Kamran Ahmed',
    role: 'Founder of Roadmap.sh',
    avatar: '/KamranAhmed.jpeg',
    description: `
    <p><strong>Farhan grasped our vision and brought it to life brilliantly — going well beyond just meeting standards.</strong></p>
    <p>I’ve had the chance to see Farhan's work up close, and I can confidently say he's one of those rare developers who truly bridge the gap between design and engineering. <strong>His ability to translate complex design ideas into clean, scalable, and responsive code is exceptional.</strong></p>
    <p>What stands out most about Farhan is his attention to detail and strong sense of design aesthetics — something that's often missing in frontend development. Whether it's crafting polished UIs, building thoughtful user experiences, or shipping production-ready components, he handles it all with precision.</p>
    <p><strong>Beyond his technical skills, he's curious, fast-paced, and collaborative.</strong> He doesn’t just build what's asked — he thinks critically about <em>why</em> and <em>how</em> it should be built. Farhan is the kind of engineer you want on your team if you're aiming for quality and velocity.</p>
  `,
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
