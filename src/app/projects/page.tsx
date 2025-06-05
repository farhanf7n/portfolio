'use client';
import styles from '../layout.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Footer } from '@/components/footer';
import BlurFade from '@/components/magicui/blur-fade';
import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { SectionDivider } from '@/components/section-divider';
import { Contact } from '@/components/sections/contact';
import { Faq } from '@/components/sections/faq';
import { Pricing } from '@/components/sections/pricing';
import { Services } from '@/components/sections/services';
import Testimonial from '@/components/sections/testimonial';
import { ThemeToggle } from '@/components/theme-toggle';
import { projectsData, uiWork } from '@/lib/data';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      {/* Aura Effect */}
      <div className="pointer-events-none absolute top-0 h-72 w-full overflow-hidden md:h-80 lg:h-96">
        <div className="content relative h-full">
          <div
            className={clsx(
              styles.auraMask,
              'absolute left-[-100%] z-negative h-full w-[300%] overflow-hidden opacity-50 [--aura-rainbow-offset:-20%] dark:opacity-30 sm:[--aura-rainbow-offset:-15%] md:left-[-150%] md:w-[400%] md:[--aura-offset:-10%]'
            )}
          >
            <div
              className={clsx(
                styles.auraRaysMask,
                'absolute inset-0 flex items-center'
              )}
            >
              <div
                className={clsx(
                  styles.auraRainbowGradient,
                  'absolute left-[-10%] aspect-square w-[120%]'
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center">
        <Navbar />

        <div className="mt-10 flex scroll-mt-96 flex-col gap-4 sm:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
          >
            What I&apos;ve{' '}
            <span className="font-bold dark:text-[#e8ff85]">Built</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className="text-muted-foreground max-w-[56ch] text-left leading-loose"
          >
            I have worked on a variety of projects over the years; some of them
            as a hobby, some as a proof of concept and others to solve my own
            pain points. Here are some of the projects that I have worked on.
          </motion.p>
        </div>

        <SectionDivider />

        <div className="flex w-full max-w-xl flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
          >
            <span className="font-bold dark:text-[#e8ff85]">Projects</span>
          </motion.h1>

          {/* All Projects */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="w-full space-y-12">
              <div className="mx-auto mt-2 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
                {projectsData.map((projectsData, id) => (
                  <BlurFade
                    key={projectsData.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={projectsData.href}
                      key={projectsData.title}
                      title={projectsData.title}
                      description={projectsData.description}
                      tags={projectsData.technologies}
                      image={projectsData.image}
                      video={projectsData.video}
                      links={projectsData.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <SectionDivider />

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
          >
            Ui <span className="font-bold dark:text-[#e8ff85]">Designs</span>
          </motion.h1>
          {/* UI Designs */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="w-full space-y-12">
              <div className="mx-auto mt-2 grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                {uiWork.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        <Services />
        <Testimonial />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
      <ScrollProgressIndicator />
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
