'use client';

import { motion } from 'framer-motion';

import { ClientWorksCard } from './client-works-card';

import BlurFade from '@/components/magicui/blur-fade';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/magicui/tabs';
import { ProjectCard } from '@/components/project-card';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { CLIENTWORKS, projectsData } from '@/lib/data';

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
          Projects
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
            defaultValue="myworks"
            className="flex w-full flex-col items-center justify-center"
          >
            <TabsList className="mb-4 grid w-[400px] grid-cols-2">
              <TabsTrigger value="myworks">My Works</TabsTrigger>
              <TabsTrigger value="clientworks">Client Works</TabsTrigger>
            </TabsList>
            <TabsContent value="myworks">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="w-full space-y-12">
                  <div className="mx-auto mt-2 grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
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
            <TabsContent value="clientworks">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="w-full space-y-12">
                  <div className="mx-auto mt-8 grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {CLIENTWORKS.filter((project) => project.featured).map(
                      (project, id) => (
                        <BlurFade
                          key={project.title}
                          delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                          <ClientWorksCard
                            key={project.title}
                            title={project.title}
                            worktype={project.worktype}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            fatures={project.features}
                            testimonial={project.testimonial}
                          />
                        </BlurFade>
                      )
                    )}
                  </div>
                </div>
              </BlurFade>
            </TabsContent>
          </Tabs>
        </BlurFade>
      </section>
    </>
  );
};
