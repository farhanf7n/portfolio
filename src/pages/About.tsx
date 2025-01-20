import { motion } from 'framer-motion';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { ThemeToggle } from '@/components/theme-toggle';

export default function AboutPage() {
  return (
    <>
      <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
        <div className="content relative h-full">
          {/* Add your background aura effect if needed */}
        </div>
      </div>
      <div className="container flex flex-col items-center">
        <Navbar />
        <main className="flex flex-col items-center px-4">
          <motion.section
            className="my-10 flex w-full max-w-4xl flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
          >
            <SectionHeading heading="About Me" />
            <div className="-mt-5 max-w-2xl text-center leading-7">
              <p className="mb-4">
                I&apos;m Farhan Ahmed, I&apos;m a Freelance Developer & Designer
                from Pakistan. I&apos;ve been learning programming for over 3
                years. After I started high school, I decided to pursue my
                passion for programming. My favorite part of programming is the
                problem-solving aspect. I love the feeling of finally figuring
                out a solution to a problem. I&apos;ve had the opportunity to
                work on several exciting projects during my learning journey,
                ranging from personal projects to collaborative ventures. My
                core stack is React, Next.js, TypeScript, and Tailwind CSS. I am
                also familiar with Nest.js and Prisma. I am always looking to
                learn new technologies.
              </p>
              <p>
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
            </div>
            <Skills />
          </motion.section>
        </main>
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
