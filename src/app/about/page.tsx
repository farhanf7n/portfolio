'use client';
import styles from '../layout.module.css';

import { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { CompanyPanel } from '@/components/CompanyPanel';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { Activity } from '@/components/sections/Activity';
import { Contact } from '@/components/sections/contact';
import { ThemeToggle } from '@/components/theme-toggle';
import { HoverTooltip } from '@/components/ui/hover-tooltip';

const tools = [
  {
    name: 'Notion',
    icon: '/apps/app_notion.jpg',
    link: 'https://apps.apple.com/us/app/notion-notes-docs-tasks/id1232780281',
  },
  {
    name: 'Expedia',
    icon: '/apps/app_expedia.jpg',
    link: 'https://apps.apple.com/us/app/expedia-hotels-flights-car/id427916203',
  },
  {
    name: 'X (Twitter)',
    icon: '/apps/app_x.jpg',
    link: 'https://apps.apple.com/de/app/x/id333903271',
  },
  {
    name: 'Flighty',
    icon: '/apps/app_flighty.jpg',
    link: 'https://apps.apple.com/us/app/flighty-live-flight-tracker/id1358823008',
  },
  {
    name: 'Spotify',
    icon: '/apps/app_spotify.jpg',
    link: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
  },
  {
    name: 'Finanzguru',
    icon: '/apps/app_finanzguru.jpg',
    link: 'https://apps.apple.com/us/app/finanzguru-konten-vertr%C3%A4ge/id1214803607',
  },
  {
    name: 'Messages',
    icon: '/apps/app_messages.jpg',
    link: 'https://apps.apple.com/us/app/messages/id1146560473',
  },
  {
    name: 'Cron',
    icon: '/apps/app_cron.jpg',
    link: 'https://apps.apple.com/us/app/cron-calendar/id1607562761',
  },
];

const workExperience = [
  {
    year: '2024 - Present',
    title: 'Freelance Developer & Designer',
    company: 'WFH',
    description:
      'Leading the design team in creating innovative user experiences and establishing design systems.',
    achievements: [
      'Developed dynamic websites utilizing advanced technologies such as Next.js, Redux, and Tailwind CSS, resulting in a notable 20% increase in web traffic.',
      'Designed and developed a reusable component library for future use, resulting in a 40% reduction in development time for new projects.',
      'Implemented responsive design principles and performance optimization strategies, resulting in remarkable enhancements in page load times.',
      'Engineered reusable components in HTML, CSS, and JavaScript, streamlining development processes and reducing overall development time by an impressive 30%.',
      'Identified and resolved frontend performance issues, leading to a substantial 15% reduction in website errors and ensuring enhanced website stability.',
    ],
    bulletIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" rx="2" fill="#E8FF85" />
        <path
          d="M9.44843 8.43213C9.89663 8.95873 10.8075 9.611 10.6454 9.92067M10.6454 9.92067C10.7357 10.2365 9.85383 10.8607 9.44643 11.3368M10.6454 9.92067C8.8085 9.95853 7.68463 9.748 6.59979 8.7246C5.46991 7.65873 5.25961 6.50843 5.35105 4.66309"
          stroke="#122625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logo: (
      <svg
        className="h-5 w-4"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{
            fill: '#000',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="M64 45.621 2.262 24.707v61.512L64 110.609Zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#1c1c1c',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="M125.738 24.707 64 45.621v64.988l61.738-24.39zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#353338',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="M125.84 24.707 64.102 4.41 2.367 24.707l61.735 20.914Zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#c5b514',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="M91.781 52.488s1.938-2.254 2.625-2.05c1.785.535 4.285 1.59 5.239.683 1.44-1.367 3.164-2.117 3.164-2.117l-.024-16.492-11.004 3.718zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#eed714',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="m41.055 11.996 61.742 20.516-10.973 3.718-61.836-20.605Zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#f5e83f',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="M42.777 68.82c-1.074-5.183-6.465-10.64-12.574-11.953-5.894-1.27-10.39 1.645-11.258 5.856l-1.023 1.093-1.43-4.648-1.09-7.43 1.875 1.614c.52-.707.891-1.266 2.23-2.133l1.302-3.856 2.23 3.043c1.527-.254 3.066-.543 4.867-.097l2.297-2.832 2.348 3.695c1.91.246 3.601 1.168 5.328 2.078l2.617-2.371 1.582 4.824c1.68 1.61 2.152 2.422 2.82 3.488l2.473-.886-1.45 7.96-1.855 4.41zm0 0"
          transform="translate(0 5.707)"
        />
        <path
          style={{
            fill: '#f5e83f',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          d="m44.285 69.621-1.508-.941-2.672 4.093-3.558.497-6.344-6.883-5.992 3.39-3.074-2.246-2.192-4.93-1.195.188-1.258-3.746 2.453 11.469c1.774 6.203 7.43 10.89 11.258 12.175 3.969 1.333 10.402.426 12.574-5.171l3.145-11.391Zm0 0"
          transform="translate(0 5.707)"
        />
      </svg>
    ),
    logoBg: 'bg-blue-100 text-blue-700',
  },
  {
    year: '2023 - 2024',
    title: 'Frontend Developer',
    company: 'Moonbox',
    description:
      'Worked with several high-profile clients and delivered several projects in collaboration with the other team members. Always exceeded the client&apos;s expectations and generated positive feedback which resulted in securing repeat business and enhanced the company&apos;s reputation as a trusted service provider in the industry.',
    achievements: [
      'Worked closely with the UI/UX team in preparing the frontends for multiple different ongoing projects.',
      'Developed several responsive web templates including dashboards, e-commerce templates, travel website, recipe website, Food ordering app and an event planner to name a few.',

      'Utilized HTML, CSS, JavaScript, and React to develop user interfaces and implement features in accordance with design specifications.',
      'Conducted code reviews and offered constructive feedback to team members, ensuring code quality and adherence to best practices.',
    ],
    bulletIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" rx="2" fill="#E8FF85" />
        <path
          d="M9.44843 8.43213C9.89663 8.95873 10.8075 9.611 10.6454 9.92067M10.6454 9.92067C10.7357 10.2365 9.85383 10.8607 9.44643 11.3368M10.6454 9.92067C8.8085 9.95853 7.68463 9.748 6.59979 8.7246C5.46991 7.65873 5.25961 6.50843 5.35105 4.66309"
          stroke="#122625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logo: (
      <svg
        className="h-5 w-4"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4510_1016)">
          <rect width="43" height="43" fill="white" />
          <path
            d="M41.5 1.5V41.5H1.5V1.5H41.5ZM42.5 0.5H0.5V42.5H42.5V0.5Z"
            fill="white"
          />
          <path
            d="M21.5 33.5C28.1274 33.5 33.5 28.1274 33.5 21.5C33.5 14.8726 28.1274 9.5 21.5 9.5C14.8726 9.5 9.5 14.8726 9.5 21.5C9.5 28.1274 14.8726 33.5 21.5 33.5Z"
            fill="white"
          />
          <path
            d="M21.5 10C27.8 10 33 15.2 33 21.5C33 27.8 27.8 33 21.5 33C15.2 33 10 27.8 10 21.5C10 15.2 15.2 10 21.5 10ZM21.5 9C14.6 9 9 14.6 9 21.5C9 28.4 14.6 34 21.5 34C28.4 34 34 28.4 34 21.5C34 14.6 28.4 9 21.5 9Z"
            fill="#808080"
          />
          <path
            d="M21.5 33.5C28.1274 33.5 33.5 28.1274 33.5 21.5C33.5 14.8726 28.1274 9.5 21.5 9.5C14.8726 9.5 9.5 14.8726 9.5 21.5C9.5 28.1274 14.8726 33.5 21.5 33.5Z"
            fill="black"
          />
          <path
            d="M21.5 10C27.8 10 33 15.2 33 21.5C33 27.8 27.8 33 21.5 33C15.2 33 10 27.8 10 21.5C10 15.2 15.2 10 21.5 10ZM21.5 9C14.6 9 9 14.6 9 21.5C9 28.4 14.6 34 21.5 34C28.4 34 34 28.4 34 21.5C34 14.6 28.4 9 21.5 9Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_4510_1016">
            <rect width="43" height="43" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    logoBg: 'bg-green-100 text-green-700',
  },
  {
    year: '2021 - 2022',
    title: 'Frontend Developer',
    company: 'Codeavour',
    description:
      'At Codeavour I was one of the key contributors to some of their key projects. I worked closely with several existing external clients. My responsibilities included development of new features, maintenance of existing features, doing code reviews, and collaborating with the product team in making sure that we build the right features etc.',

    achievements: [
      'Converting Figma/ XD/ Photoshop designs to code.',
      'Worked on the frontend of a high traffic travel website using React to showcase popular travel destinations and itineraries.',
      'Designed an e-commerce platform using React to provide users with a seamless shopping experience. Integrated shopping cart functionality and product categories for easy navigation.',
      'Participated in code reviews.',
      'Worked on an internal Back-Office application used to manage clients, meetings, leads and reports.',
      'Getting feedback from clients and incorporating that.',
    ],
    bulletIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" rx="2" fill="#E8FF85" />
        <path
          d="M9.44843 8.43213C9.89663 8.95873 10.8075 9.611 10.6454 9.92067M10.6454 9.92067C10.7357 10.2365 9.85383 10.8607 9.44643 11.3368M10.6454 9.92067C8.8085 9.95853 7.68463 9.748 6.59979 8.7246C5.46991 7.65873 5.25961 6.50843 5.35105 4.66309"
          stroke="#122625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logo: (
      <Image
        src="/codeavour.png"
        alt="Codeavour"
        width={20}
        height={20}
        className="h-5 w-4 object-contain"
      />
    ),
    logoBg: 'bg-purple-100 text-purple-700',
  },
  {
    year: '2020 - 2021',
    title: 'Frontend Developer',
    company: 'Career Institute',
    description:
      'Career Institute educates and trains students in areas such as Graphic Designing, SEO, and web development etc. I joined them as a Front-end developer and worked on several projects. My responsibilities included:',

    achievements: [
      'Maintaining the frontend of the institute&apos;s main website.',
      'Worked on the frontend of a high traffic travel website using React to showcase popular travel destinations and itineraries.',
      'Making frontend templates using HTML/CSS and JavaScript. Created almost ~50 frontend templates.',
      'Helped create starter kits for frontend (Bootstrap)',
      'Meeting with clients to gather the requirements, get feedback on the templates',

      'Getting feedback from clients and incorporating that.',
    ],
    bulletIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" rx="2" fill="#E8FF85" />
        <path
          d="M9.44843 8.43213C9.89663 8.95873 10.8075 9.611 10.6454 9.92067M10.6454 9.92067C10.7357 10.2365 9.85383 10.8607 9.44643 11.3368M10.6454 9.92067C8.8085 9.95853 7.68463 9.748 6.59979 8.7246C5.46991 7.65873 5.25961 6.50843 5.35105 4.66309"
          stroke="#122625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logo: (
      <Image
        src="/careerfavicon.png"
        alt="Career Institute"
        width={20}
        height={20}
        className="h-5 w-4 object-contain"
      />
    ),
    logoBg: 'bg-purple-100 text-purple-700',
  },
  {
    year: '2019 - 2020',
    title: 'Intern',
    company: 'Digital Softs',
    description:
      'Digital Softs used to deliver desktop and web applications in several domains including Retail, Supply Chain, Manufacturing, Hospitality and Education. I joined the team working on the web application of their product and developed the frontend part which included several modules including accounts, finance, reporting, product and asset management etc.',
    logo: (
      <Image
        src="/DS-favicon.png"
        alt="DigitalSoft"
        width={20}
        height={20}
        className="h-5 w-4 object-contain"
      />
    ),
    logoBg: 'bg-purple-100 text-purple-700',
  },
];

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
        {/* About */}
        <section className="mb-8 flex w-full flex-col pb-4 md:mb-4 lg:mb-12 lg:flex-row">
          <div className="w-full lg:mx-auto">
            <div className="relative h-40 w-full lg:h-48">
              <div className="group absolute inset-0 left-1/2 mx-auto w-full max-w-xl -translate-x-1/2 rounded-2xl bg-neutral-100 bg-[url('/mallPicture.png')] bg-position-[0px -70px] bg-cover bg-no-repeat bg-top lg:ml-0">
                {/* Video shown on hover */}
                <video
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src="/weather.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                <div className="max-w-nav absolute -bottom-12 left-1/2 mx-auto w-full -translate-x-1/2">
                  <Image
                    src="/ghibli-dp.png"
                    width={96}
                    height={96}
                    className="object-top border-light-neutral ml-9 aspect-square w-24 rounded-full border-4 object-cover dark:border-black"
                    alt="Profile picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="flex flex-col items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="text-muted-foreground mx-auto max-w-md grow text-left"
          >
            <p className="mb-4 dark:text-neutral-400">
              Born on the 21st of February, 1996 in{' '}
              <span className="group relative inline-block rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0 text-black transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-300">
                Karachi
                <span className="pointer-events-none absolute -top-5 left-1/2 z-[99] -translate-x-1/2 -translate-y-3 scale-90 rounded-full bg-black px-2.5 py-1 text-sm font-normal text-white opacity-0 transition-all delay-75 duration-150 ease-out group-hover:-top-6 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black">
                  <span className="absolute -bottom-1 left-1/2 z-30 size-2.5 -translate-x-1/2 rotate-45 scale-75 rounded-sm bg-black transition-transform duration-200 group-hover:scale-100 dark:bg-white"></span>
                  <span className="relative z-50 truncate">Pakistan</span>
                </span>
              </span>{' '}
              I was part of the first generation getting adults in the age of
              computers, mobile phones, and advanced technology.
            </p>
            <p className="mb-4 dark:text-neutral-400">
              Quickly I got used to working with computers and in 2016, I began
              making money on the Internet by selling my skills as a{' '}
              <span className="group relative inline-block rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0 text-black transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-300">
                freelance developer
                <span className="pointer-events-none absolute -top-5 left-1/2 z-[99] -translate-x-1/2 -translate-y-3 scale-90 rounded-full bg-black px-2.5 py-1 text-sm font-normal text-white opacity-0 transition-all delay-75 duration-150 ease-out group-hover:-top-6 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black">
                  <span className="absolute -bottom-1 left-1/2 z-30 size-2.5 -translate-x-1/2 rotate-45 scale-75 rounded-sm bg-black transition-transform duration-200 group-hover:scale-100 dark:bg-white"></span>
                  <span className="relative z-50 truncate">
                    I also made ui designs
                  </span>
                </span>
              </span>
              .
            </p>
            <p className="mb-4 dark:text-neutral-400">
              I&apos;m a frontend developer passionate about crafting engaging
              digital experiences that delight users and solve real problems.
              Always excited to explore new technologies and collaborate on
              innovative projects - let&apos;s create something amazing
              together!
            </p>
          </motion.div>
        </main>

        {/* Work Experience */}
        <section className="mx-auto my-10 w-full max-w-md lg:max-w-none">
          <div className="mx-auto w-full max-w-xl grow">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
            >
              Work{' '}
              <span className="font-bold dark:text-[#e8ff85]">Experience</span>{' '}
            </motion.h1>

            <ul className="mt-4">
              {workExperience.map((exp, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-4 py-3 opacity-100`}
                >
                  <span className="text-xs sm:text-base w-24 sm:w-32 dark:text-neutral-400">
                    {exp.year}
                  </span>
                  <span className="text-xs sm:text-base font-normal dark:text-neutral-400">
                    {exp.title} at
                  </span>
                  <CompanyPanel
                    logo={exp.logo}
                    company={exp.company}
                    title={exp.title}
                    year={exp.year}
                    description={exp.description}
                    achievements={exp.achievements}
                    bulletIcon={exp.bulletIcon}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1 ${exp.logoBg}`}
                  />
                </li>
              ))}
            </ul>

            {/* Company Experience */}
          </div>
        </section>

        {/* Apps I like */}
        <section className="mx-auto my-10 w-full max-w-md lg:max-w-none">
          <div className="mx-auto w-full max-w-xl grow">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
            >
              <span className="font-bold dark:text-[#e8ff85]">Apps</span> I like
              using
            </motion.h1>
          </div>

          <div className="m-auto w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="overflow-hidden"
            >
              <div className="my-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
                <motion.div
                  animate={{
                    x: [0, '-50%'],
                  }}
                  transition={{
                    duration: 20,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                  }}
                  className="flex flex-none gap-8 pr-12"
                >
                  {Array.from({ length: 2 }).map((_, i) => (
                    <Fragment key={i}>
                      {tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex flex-none items-center justify-center"
                        >
                          <HoverTooltip content={tool.name}>
                            <a
                              href={tool.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Image
                                src={tool.icon}
                                alt={tool.name}
                                width={64}
                                height={64}
                                className="size-16 rounded-2xl border border-neutral-200 transition-all hover:shadow-lg hover:shadow-black/5 dark:border-neutral-800"
                              />
                            </a>
                          </HoverTooltip>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Activity */}
        <Activity />
        <Contact />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
      <ScrollProgressIndicator />
      <ThemeToggle className="fixed bottom-5 right-5 flex sm:bottom-8 sm:right-8" />
    </>
  );
}
