'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skills } from '@/components/skills';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const experience = [
  {
    company: 'Freelance',
    from: '2023',
    to: 'Present',
    jobTitle: 'Freelance Developer & Designer',
    description: 'Working on various client projects and personal ventures',
  },
  // Add more experience items as needed
];

const tools = [
  {
    name: 'VS Code',
    icon: '/images/tools/vscode.png',
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Figma',
    icon: '/images/tools/figma.png',
    link: 'https://figma.com',
  },
  // Add more tools as needed
];

export default function Page() {
  return (
    <>
      <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
        <div className="content relative h-full">
          {/* Background aura effect */}
        </div>
      </div>
      <div className="container flex flex-col items-center">
        <Navbar />
        <main className="flex flex-col items-center px-4">
          <section className="w-full flex flex-col lg:flex-row pb-4 md:mb-4 mb-8 lg:mb-12">
            <div className="w-full lg:mx-auto">
              <div className="w-full h-40 lg:h-48 relative">
                <div className="rounded-2xl absolute left-1/2 w-full max-w-xl inset-0 -translate-x-1/2 bg-neutral-100">
                  <div className="w-full max-w-nav mx-auto left-1/2 -translate-x-1/2 absolute -bottom-12">
                    <Image
                      src="/portrait.jpg"
                      width={96}
                      height={96}
                      className="object-cover ml-9 aspect-square rounded-full border-4 border-white dark:border-black"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <motion.section
            className="my-10 flex w-full max-w-4xl flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
          >
            <div className="-mt-5 max-w-2xl text-center leading-7">
              <p className="mb-4">
                I&apos;m Farhan Ahmed, I&apos;m a Freelance Developer & Designer
                from Pakistan. I&apos;ve been learning programming for over 3
                years. After I started high school, I decided to pursue my
                passion for programming. My favorite part of programming is the
                problem-solving aspect.
              </p>
              <p className="mb-4">
                I love the feeling of finally figuring out a solution to a
                problem. I&apos;ve had the opportunity to work on several
                exciting projects during my learning journey, ranging from
                personal projects to collaborative ventures.
              </p>
              <p>
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
            </div>

            <div className="mt-12 w-full">
              <h3 className="text-lg font-semibold mb-6">Experience</h3>
              {/* Add Experience section */}
            </div>

            <div className="mt-12 w-full">
              <h3 className="text-lg font-semibold mb-6">Tools I Use</h3>
              <TooltipProvider>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tools.map((tool) => (
                    <Tooltip key={tool.name}>
                      <TooltipTrigger asChild>
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                        >
                          <Image
                            src={tool.icon}
                            width={40}
                            height={40}
                            alt={tool.name}
                            className="rounded-md"
                          />
                          <span className="ml-3 text-sm">{tool.name}</span>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        Click to visit {tool.name}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
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
