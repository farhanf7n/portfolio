'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import BlurFade from '@/components/magicui/blur-fade';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/magicui/tabs';
import { ProjectCard } from '@/components/project-card';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData, uiWork } from '@/lib/data';

const BLUR_FADE_DELAY = 0.04;

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="my-10 flex w-full max-w-xl scroll-mt-96 flex-col gap-4 sm:mt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
        >
          Stuff I&apos;ve{' '}
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
          Here are a few highlights of my selected work. Feel free to explore
          more in the Projects section!
        </motion.p>

        <BlurFade className="mt-2" delay={BLUR_FADE_DELAY * 11}>
          <Tabs
            defaultValue="Projects"
            className="flex w-full flex-col items-center justify-center"
          >
            <TabsList className="mb-4 grid w-full grid-cols-2">
              <TabsTrigger value="Projects">Projects</TabsTrigger>
              <TabsTrigger value="UiWork">Ui Designs</TabsTrigger>
            </TabsList>
            <TabsContent value="Projects">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="w-full space-y-12">
                  <div className="mx-auto mt-2 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
                    {projectsData
                      .filter((projectsData) => projectsData.featured)
                      .map((projectsData, id) => (
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
            </TabsContent>
            <TabsContent value="UiWork">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="w-full space-y-12">
                  <div className="mx-auto mt-2 grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {uiWork
                      .filter((project) => project.featured)
                      .map((project, id) => (
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
            </TabsContent>
          </Tabs>

          <div className="mt-[10px] flex justify-center">
            <Link
              className="cubic-btn h-9 w-full justify-center rounded-md"
              href="/projects"
            >
              <span data-text="View All">
                <p className="inner">View All</p>
              </span>
            </Link>
          </div>
        </BlurFade>
      </section>
    </>
  );
};
