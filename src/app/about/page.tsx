'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Skills } from '@/components/skills';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
          <section className="mb-8 flex w-full flex-col pb-4 md:mb-4 lg:mb-12 lg:flex-row">
            <div className="w-full lg:mx-auto">
              <div className="relative h-40 w-full lg:h-48">
                <div className="absolute inset-0 left-1/2 w-full max-w-xl -translate-x-1/2 rounded-2xl bg-neutral-100">
                  <div className="max-w-nav absolute -bottom-12 left-1/2 mx-auto w-full -translate-x-1/2">
                    <Image
                      src="/portrait.jpg"
                      width={96}
                      height={96}
                      className="ml-9 aspect-square rounded-full border-4 border-white object-cover dark:border-black"
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
              <h3 className="mb-6 text-lg font-semibold">Experience</h3>
              {/* Add Experience section */}
            </div>

            <div className="mt-12 w-full">
              <h3 className="mb-6 text-lg font-semibold">Tools I Use</h3>
              <TooltipProvider>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {tools.map((tool) => (
                    <Tooltip key={tool.name}>
                      <TooltipTrigger asChild>
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
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
