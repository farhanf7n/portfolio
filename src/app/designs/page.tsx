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

        <div className="mt-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
          >
            Good design is{' '}
            <span className="font-bold dark:text-[#e8ff85]">invisible.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className="text-muted-foreground max-w-[56ch] text-left leading-loose"
          >
            Strategic thinker crafting clean, effective designs that seamlessly
            blend user delight with business success.
          </motion.p>
        </div>

        <SectionDivider />

        <div className="flex w-full flex-col gap-4">
          {/* UI Designs */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="w-full space-y-12">
              <div className="mx-auto mt-2 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3">
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
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
