import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About',
    hash: '/about',
  },
  {
    name: 'Projects',
    hash: '/projects',
  },
  {
    name: 'Experience',
    hash: '/experience',
  },
  {
    name: 'Contact',
    hash: '/contact',
  },
] as const;

export const projectsData = [
  {
    title: 'x0-GPT - Ai powered brain',
    href: 'https://x0-gpt.devwtf.in',
    dates: 'Jul 2024 - Aug 2024',
    featured: true,
    description:
      "x0-GPT is a free AI tool that lets you interact with websites, PDFs, and documents in real-time. It provides quick answers and insights directly from your chosen sources, all while keeping your data private. It's easy to use and versatile, making information more accessible than ever.",
    technologies: [
      'Next.js',
      'Typescript',
      'Postgres',
      'Upstash rag-chat sdk',
      'Vercel ai sdk',
      'Supabase',
      'TailwindCSS',
      'Acternity UI',
      'Shadcn UI',
      'Magic UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://x0-gpt.devwtf.in',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://git.new/pvOF6aq',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/ffeIgzW.png',
    video: '',
  },
  {
    title: 'Profanity Validator - a SDK for profanity moderation',
    href: 'https://profanity.devwtf.in',
    dates: '28th Oct 2024 - 29th Oct 2024',
    featured: true,
    description:
      "If you run a web app with any kind of user generated content, it's your responsibility to keep things in order. That's a challenge if your users keep dropping F-bombs like confetti at a toddler's birthday party. That's what this SDK actually solves but with more moderation capabilities.",
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'NodeJs',
      'NPM',
      'react-hook-forms',
      'zod',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://profanity.devwtf.in',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://l.devwtf.in/profanity',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/KCJmPOa.png',
    video: '',
  },
  {
    title: 'Acter - Ai to convert your ideas into UI',
    href: 'https://acter.devwtf.in',
    // dates: "Mar 2024 - May 2024",
    featured: true,
    active: true,
    description:
      'Acter is an Ai tool which will help you to convert your ideas into great UI and it supports a huge number of popular UI libraries and frameworks which will make your work easier to modify any existing code from any library. And also you can generate your UI using a particular framework and UI library.',
    technologies: [
      'Next.js',
      'Typescript',
      'Xata DB',
      'RAG',
      'Vercel ai sdk',
      'Postgress',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://acter.devwtf.in',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://l.devwtf.in/acter',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/JwDi96s.png',
    video: '',
  },
  {
    title: 'Evently - Chromium extension for event auditing',
    href: 'https://evently.devwtf.in',
    dates: 'Sept 2024 - Sept 2024',
    featured: false,
    description:
      'Your essential companion for event auditing. It features a straightforward countdown timer that can be displayed in new tabs within Chromium-based browsers, providing users with a simple yet effective way to track time until their event.',
    technologies: [
      'Next.js',
      'Typescript',
      'React',
      'TailwindCSS',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://evently.devwtf.in',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://git.new/ESRt29k',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/JI752LF.png',
    video: '',
  },
  {
    title: 'FPC - Freelancer Price Calculator',
    href: 'https://freelance-price-calculator.devwtf.in/',
    dates: 'Sept 2024 - Sept 2024',
    featured: false,
    description:
      'A powerful and intuitive tool for freelancers to calculate project prices and convert currencies realtime.',
    technologies: [
      'Next.js',
      'Currency Api',
      'Typescript',
      'React',
      'TailwindCSS',
      'Shadcn UI',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://freelance-price-calculator.devwtf.in/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://git.new/tValGOy',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/1zeZewW.png',
    video: '',
  },
  {
    title: 'Telegram Member Adder',
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: 'Apr 2023 - Apr 2023',
    featured: false,
    archived: true,
    description:
      'A python code to scrap telegram group members data and adds them to another telegram group..',
    technologies: ['Scrapping', 'Telegram API', 'Python'],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/SkidGod4444/TeleGram-Member-Adder',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: '',
    video: '',
  },
  {
    title: 'Sputnik - My first python discord bot',
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: 'Oct 2022 - Sept 2023',
    featured: false,
    archived: true,
    description:
      'All in one python discord bot. Source code was migrated from Replit to Github later.',
    technologies: ['Discord.py', 'Discord API', 'Python', 'Replit', 'Json DB'],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/SkidGod4444/Sputnik',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: '',
    video: '',
  },
] as const;

export const CLIENTWORKS = [
  {
    title: 'BOXCHAT - One chat for all ai models',
    dates: '9th Sep 2024 - 22nd Sep 2024',
    worktype: 'Fullstack',
    testimonial:
      'https://firebasestorage.googleapis.com/v0/b/archives-63571.appspot.com/o/portfolio%2Ftestimonials%2Fboxchat-testimonial.mp4?alt=media&token=51be6968-e40f-4074-a0f7-026f98930671',
    featured: true,
    description:
      'BOXCHAT is a SAAS that lets you interact with websites, PDFs, and documents in real-time. It provides quick answers and insights directly from your chosen sources, it gives multiple ai models feature to sync your questions and get different responses at a time.',
    features:
      'Playground feature like **Vercel**. Chat feature like **ChatGPT**. Text to image generation.',
    technologies: [
      'Next.js',
      'Typescript',
      'Postgres',
      'Upstash rag-chat sdk',
      'Vercel ai sdk',
      'Supabase',
      'TailwindCSS',
      'Acternity UI',
      'Shadcn UI',
      'Magic UI',
    ],
    image: '',
    video:
      'https://firebasestorage.googleapis.com/v0/b/archives-63571.appspot.com/o/portfolio%2Fboxchat-preview.mp4?alt=media&token=e18c270b-dbce-4588-838e-2162c2de4bd8',
  },
];

export const experiencesData = [
  {
    title: 'Internship at WEB-BOX',
    location: 'Tarnobrzeg, PL',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    date: '2023',
  },
  {
    title: 'Internship at Chop-Chop',
    location: 'Remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    date: '2024',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    date: '2023 - present',
  },
] as const;

export const servicesData = [
  {
    tagLine: 'Node, React',
    title: 'Single page APPs',
    description:
      'Scalability, Reusable Components, Performance, One Way Data Flow - the perfect ingredients for single-page applications.',
    icon: <Icons.appsIcon className="size-24" />,
  },
  {
    tagLine: 'Mobile/ Desktop Designs',
    title: 'UI Designing',
    description:
      'We create products that serve both users and businesses and drive real results.',
    icon: <Icons.figma className="size-24" />,
  },
  {
    tagLine: 'PSD TO HTML',
    title: 'Front-End Coding',
    description:
      'We convert any design file: Sketch, PSD, Adobe XD, Ai to pixel perfect, semantic and standard compliant HTML/CSS template.',
    icon: <Icons.html className="size-24" />,
  },
  {
    tagLine: 'PSD to Shopify',
    title: 'Shopify Development',
    description:
      'We can turn design mock-ups from any format into a fully functional, responsive Shopify sites that makes our client&pos;s life easy.',
    icon: <Icons.shopify className="size-24" />,
  },
] as const;

export const pricingData = [
  {
    href: 'https://wa.me/+923091789249?text=Hello!%20I%27m%20interested%20in%20working%20with%20you.%20Could%20you%20provide%20me%20with%20more%20details%20about%20the%20Kairos%20plan%20and%20how%20we%20can%20get%20started%3F',
    bgColor: '#56c598',
    tagLine: 'Hours',
    planName: 'Kairos',
    description:
      'Complete flexibility, pay only for the hours your project needs.',
    price: 'USD $30',
    duration: 'Hr.',
  },
  {
    href: 'https://wa.me/+923091789249?text=Hello!%20I%27m%20interested%20in%20working%20with%20you.%20Could%20you%20provide%20me%20with%20more%20details%20about%20the%20Prometeo%20plan%20and%20how%20we%20can%20get%20started%3F',
    bgColor: '#b488fb',
    tagLine: 'Design UI/UX',
    planName: 'Prometeo',
    description: 'Get high-quality UI design services for a fixed monthly fee.',
    price: 'USD $2,700',
    duration: 'Monthly',
  },
  {
    href: 'href="https://wa.me/+923091789249?text=Hello!%20I%27m%20interested%20in%20working%20with%20you.%20Could%20you%20provide%20me%20with%20more%20details%20about%20the%20Hefesto%20plan%20and%20how%20we%20can%20get%20started%3F"',
    bgColor: '#c391f5',
    tagLine: 'Front End',
    planName: 'Hefesto',
    description:
      'Ongoing access to front-end development services through a monthly fee.',
    price: 'USD $3,000',
    duration: 'Monthly',
  },
  {
    href: 'href="https://wa.me/+923091789249?text=Hello!%20I%27m%20interested%20in%20working%20with%20you.%20Could%20you%20provide%20me%20with%20more%20details%20about%20the%20Ananke%20plan%20and%20how%20we%20can%20get%20started%3F"',
    bgColor: '#f7fd8f',
    tagLine: 'Design UI/UX + Front End',
    planName: 'Ananke',
    description:
      'The perfect combination for comprehensive projects: Design and development.',
    price: 'USD $3,500',
    duration: 'Monthly',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.figma className="size-12" /> },
  { icon: <Icons.xd className="size-12" /> },
] as const;
