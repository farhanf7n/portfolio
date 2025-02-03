'use client';
import styles from '../layout.module.css';

import { Fragment } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { CompanyPanel } from '@/components/CompanyPanel';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Activity } from '@/components/sections/Activity';
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
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 63.992579,72.521325 41.553732,60.660321 2.6034211,40.074058 c -0.035557,-0.03555 -0.1066637,-0.03555 -0.1422174,-0.03555 -1.4221913,-0.675528 -2.87993927,0.746641 -2.3466152,2.168863 l 19.8466965,50.619383 0.0035,0.0109 c 0.02134,0.04994 0.03912,0.09944 0.06046,0.149334 0.814189,1.887956 2.591938,3.054 4.526143,3.512657 0.163538,0.03587 0.280527,0.06782 0.476917,0.107073 0.195451,0.04351 0.46881,0.10282 0.703471,0.120745 0.03912,0.0033 0.07467,0.0033 0.113789,0.0065 h 0.02846 c 0.02841,0.0044 0.05687,0.0044 0.08533,0.0076 h 0.03908 c 0.02491,0.0033 0.05333,0.0033 0.07824,0.0033 h 0.04621 c 0.02846,0.0044 0.05687,0.0044 0.08533,0.0044 v 0 c 25.135232,2.740415 50.493562,2.740415 75.628755,0 v 0 c 0.30207,0 0.59732,-0.0145 0.88147,-0.04263 0.0926,-0.0109 0.18133,-0.02137 0.27051,-0.03195 0.0107,-0.0044 0.0247,-0.0044 0.0354,-0.0076 0.0606,-0.0076 0.12074,-0.01788 0.18133,-0.02857 0.0887,-0.0109 0.17791,-0.02813 0.26666,-0.04612 0.17791,-0.03925 0.25855,-0.06738 0.50004,-0.1506 0.24106,-0.08276 0.64169,-0.22784 0.89214,-0.348585 0.25087,-0.120746 0.42452,-0.236792 0.63444,-0.368201 0.2594,-0.163837 0.50644,-0.331086 0.75689,-0.518812 0.10794,-0.08276 0.18175,-0.135683 0.25983,-0.210351 l -0.0427,-0.02475 z"
          fill="#ff4b4b"
          id="path14"
          style={{ strokeWidth: '0.426657' }}
        />

        <path
          d="m 125.44606,40.07457 h -0.0354 L 86.445785,60.660834 108.10586,92.919776 127.90272,42.207855 v -0.07109 c 0.49791,-1.493346 -1.0308,-2.844391 -2.45668,-2.062205"
          fill="#7d353b"
          id="path16"
          style={{ strokeWidth: '0.426657' }}
        />
        <path
          d="m 66.069117,30.286053 c -0.995816,-1.454191 -3.164512,-1.454191 -4.124488,0 L 41.553817,60.660572 63.992579,72.521761 106.51616,94.995458 c 0.26709,-0.261532 0.48127,-0.516249 0.7074,-0.785468 0.31999,-0.394664 0.61865,-0.817481 0.8819,-1.290639 L 86.445379,60.660572 Z"
          fill="#bd4043"
          id="path18"
          style={{ strokeWidth: '0.426657' }}
        />
      </svg>
    ),
    logoBg: 'bg-blue-100 text-blue-700',
  },
  {
    year: '2022 - 2024',
    title: 'Frontend Developer',
    company: 'Startup X',
    description:
      'Worked on building and maintaining modern web applications with a focus on user experience and performance.',
    achievements: [
      'Led the migration of legacy codebase to React and TypeScript, improving code maintainability by 50%.',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.',
      'Developed and maintained a design system used across multiple projects.',
      'Optimized application performance, achieving a 40% improvement in load times.',
      'Mentored junior developers and conducted code reviews to ensure code quality.',
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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
      >
        <defs>
          <linearGradient
            id="a"
            x1="27.5"
            x2="152"
            y1="3"
            y2="63.5"
            gradientTransform="translate(-3.22 1.507) scale(.80503)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".1" stopColor="#76b3e1" />
            <stop offset=".3" stopColor="#dcf2fd" />
            <stop offset="1" stopColor="#76b3e1" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="95.8"
            x2="74"
            y1="32.6"
            y2="105.2"
            gradientTransform="translate(-3.22 1.507) scale(.80503)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#76b3e1" />
            <stop offset=".5" stopColor="#4377bb" />
            <stop offset="1" stopColor="#1f3b77" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="18.4"
            x2="144.3"
            y1="64.2"
            y2="149.8"
            gradientTransform="translate(-3.22 1.507) scale(.80503)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#315aa9" />
            <stop offset=".5" stopColor="#518ac8" />
            <stop offset="1" stopColor="#315aa9" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="75.2"
            x2="24.4"
            y1="74.5"
            y2="260.8"
            gradientTransform="translate(-3.22 1.507) scale(.80503)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#4377bb" />
            <stop offset=".5" stopColor="#1a336b" />
            <stop offset="1" stopColor="#1a336b" />
          </linearGradient>
        </defs>
        <path
          fill="#76b3e1"
          d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z"
        />
        <path
          fill="url(#a)"
          d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z"
          opacity=".3"
        />
        <path
          fill="#518ac8"
          d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z"
        />
        <path
          fill="url(#b)"
          d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z"
          opacity=".3"
        />
        <path
          fill="url(#c)"
          d="M104.654 65.91a36.226 36.226 0 0 0-38.641-12.076L16.1 69.934 0 98.111l90.164 15.295 16.1-28.981c3.22-5.635 2.415-12.075-1.61-18.516z"
        />
        <path
          fill="url(#d)"
          d="M88.553 94.085A36.226 36.226 0 0 0 49.912 82.01L0 98.11s42.667 32.202 75.673 24.152l2.415-.806c13.686-4.025 18.516-16.905 10.465-27.37z"
        />
      </svg>
    ),
    logoBg: 'bg-green-100 text-green-700',
  },
  {
    year: '2020 - 2022',
    title: 'Junior Web Developer',
    company: 'Tech Corp',
    description:
      'Started my journey in web development, focusing on building responsive and accessible web applications.',
    achievements: [
      'Collaborated with the design team to implement pixel-perfect UI components.',
      'Built and maintained multiple client websites using WordPress and custom themes.',
      'Improved website accessibility scores to meet WCAG 2.1 standards.',
      'Participated in daily stand-ups and sprint planning meetings.',
      'Contributed to the company blog with technical articles and tutorials.',
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    logo: (
      <svg
        className="h-5 w-4"
        viewBox="0 0 58 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.00146484 20.9994V34.5078L29.348 53.5753L57.9918 33.4226V18.5148L29.6143 0L0.00146484 20.9994Z"
          fill="white"
        />
        <path
          d="M34.5728 3.23818L29.359 6.86838V5.80951L23.0893 10.2184L10.968 18.8055L1.62546 25.473C1.10686 25.8445 0.5186 26.2687 0 26.6263V25.5117L2.20444 23.9311L20.083 11.1952L32.9257 2.15918L34.5728 3.23818Z"
          fill="#006BB6"
        />
        <path
          d="M37.9368 5.42739L29.359 11.4339V10.3286L9.65835 24.2595L0 31.1314V30.023L25.9532 11.5871L36.271 4.34375L37.9368 5.42739Z"
          fill="#006BB6"
        />
        <path
          d="M0.11792 34.5078L4.81628 31.1377L32.1643 11.7761L39.626 6.52661L41.2762 7.60871L29.3608 15.9853V14.8691L13.0148 26.4594V28.8914L9.97287 31.0773L2.7264 36.2091L0.11792 34.5078Z"
          fill="#006BB6"
        />
        <path
          d="M3.45215 36.6814L43.002 8.7312L44.6352 9.79936L29.3589 20.5398V19.45L13.013 31.0186V33.4305L6.02812 38.3657L3.45215 36.6814Z"
          fill="#006BB6"
        />
        <path
          d="M6.79468 38.8609L24.3032 26.4501L46.3383 10.906L47.9948 11.9927L29.3592 25.111V23.9918L13.0132 35.5682V37.9646L9.36136 40.539L6.79468 38.8609Z"
          fill="#006BB6"
        />
        <path
          d="M10.1069 41.0204L49.6738 13.0872L51.3132 14.1522L29.3586 29.6313V28.5445L13.0126 40.0853V42.9183L10.1069 41.0204Z"
          fill="#006BB6"
        />
        <path
          d="M13.4276 43.1908L53.0332 15.2747L54.6803 16.3521L43.4089 24.2611L30.6204 33.2832L31.5662 33.9087L16.0237 44.8829L13.4276 43.1908Z"
          fill="#006BB6"
        />
        <path
          d="M16.755 45.3582L56.3513 17.439L58 18.5164L47.0413 26.2428L47.9949 26.8682L45.4173 28.6996V27.3651L33.9447 35.4661L34.8936 36.0854L19.3697 47.0719L16.755 45.3582Z"
          fill="#006BB6"
        />
        <path
          d="M20.1013 47.5438L45.8146 29.399L57.8105 20.9637L57.9437 20.8723V23.0675L50.3365 28.4036L51.335 29.0538L45.4167 33.1964V31.8574L37.2631 37.6425L38.2368 38.2787L22.7129 49.2436L20.1013 47.5438Z"
          fill="#006BB6"
        />
        <path
          d="M23.4438 49.7221L52.0288 29.5617L57.9439 25.416V27.6127L53.6728 30.5927L54.6682 31.2414L45.417 37.7277V36.3778L40.5762 39.8176L41.5608 40.4616L26.0492 51.4203L23.4438 49.7221Z"
          fill="#006BB6"
        />
        <path
          d="M26.7705 51.8927L50.5301 35.1316L57.9438 29.9316V32.1098L57.0243 32.7863L57.9918 33.4225L45.4184 42.2387V40.8764C44.9974 41.1829 44.3425 41.6659 43.906 41.9957L44.8642 42.6273L29.3496 53.5736L26.7705 51.8927Z"
          fill="#006BB6"
        />
        <path
          d="M31.2189 1.04556C30.6121 1.47592 29.9696 1.92331 29.3597 2.36141V1.31802L19.562 8.20689L5.90968 17.8977L0.000732422 22.1007V20.9979L14.8358 10.3999L29.6151 0L31.2189 1.04556Z"
          fill="#006BB6"
        />
      </svg>
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
              <div className="absolute inset-0 left-1/2 mx-auto w-full max-w-xl -translate-x-1/2 rounded-2xl bg-neutral-100 bg-[url('/netherlands.jpg')] bg-cover bg-center lg:ml-0">
                <div className="max-w-nav absolute -bottom-12 left-1/2 mx-auto w-full -translate-x-1/2">
                  <Image
                    src="/portrait.jpg"
                    width={96}
                    height={96}
                    className="border-light-neutral ml-9 aspect-square w-24 rounded-full border-4 object-cover dark:border-black"
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
              Quickly I got used to working with computers and in 2013, I began
              making money on the Internet by selling my skills as a{' '}
              <span className="group relative inline-block rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0 text-black transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700/50 dark:hover:bg-neutral-800 dark:hover:text-neutral-300">
                digital designer
                <span className="pointer-events-none absolute -top-5 left-1/2 z-[99] -translate-x-1/2 -translate-y-3 scale-90 rounded-full bg-black px-2.5 py-1 text-sm font-normal text-white opacity-0 transition-all delay-75 duration-150 ease-out group-hover:-top-6 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black">
                  <span className="absolute -bottom-1 left-1/2 z-30 size-2.5 -translate-x-1/2 rotate-45 scale-75 rounded-sm bg-black transition-transform duration-200 group-hover:scale-100 dark:bg-white"></span>
                  <span className="relative z-50 truncate">
                    I also edited videos
                  </span>
                </span>
              </span>
              .
            </p>
            <p className="mb-4 dark:text-neutral-400">
              Now, 12 years later, I have learned coding in addition, opening
              whole new possibilities for people and companies I work with. The
              job title I love using for this unique field is:
              <br />
              <span className="font-medium">Design Engineer</span>.
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
                  <span className="w-32 dark:text-neutral-400">{exp.year}</span>
                  <span className="font-medium dark:text-neutral-400">
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

        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
