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
    title: 'EZSauce',
    href: 'https://ezsauce.netlify.app/',
    featured: true,
    description:
      'Explore selected and chosen items that will improve your productivity and help you grow as a developer and designer. Curated Resource Collection - Hand-picked tools and resources for developers/designers.\n\n\n Smart Categorization - Resources organized by categories (Design Stuff, Tutorials, Templates, etc.) Dynamic Search - Real-time filtering across names, tags, and categories.',
    technologies: [
      'React.js',
      'Typescript',
      'TailwindCSS',
      'React Hooks',
      'Cloudinary API',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://ezsauce.netlify.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/ezsauce',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/SbQ9Kyw.png',
    video: '',
  },
  {
    title: 'Advanced Portfolio',
    href: 'https://animation-portfolio-fa.vercel.app/',
    featured: true,
    description:
      'A modern, interactive portfolio website built with React, showcasing professional experience and skills.\n\nThe project features: Smooth animations and transitions using Framer Motion and GSAP, Interactive work experience modal with hover effects, Responsive design for all screen sizes, Clean and minimalist UI.',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'NPM',
      'react-hook-forms',
      'zod',
      'Shadcn UI',
      'Framer Motion',
      'GSAP',
    ],
    links: [
      {
        type: 'Website',
        href: 'https://frhan.vercel.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/animation-portfolio',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/Y3MeBkp.png',
    video: '',
  },
  {
    title: 'Layers - Home Page',
    href: 'https://project-management-fn.vercel.app/',
    featured: true,
    active: true,
    description:
      'I developed a dynamic and visually appealing landing page for a Figma-like company using React and Framer Motion. The page features smooth animations and an engaging user interface, showcasing the brand&apos;s functionality and creative tools.',
    technologies: ['React.js', 'JSX', 'TailwindCSS', 'Framer Motion'],
    links: [
      {
        type: 'Website',
        href: 'https://project-management-fn.vercel.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/project-management-app',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/rMnH4vq.png',
    video: '',
  },
  {
    title: 'Sub Reddits',
    href: 'https://redsubslist.netlify.app/',
    featured: false,
    description:
      'A browser-based Reddit client that displays multiple subreddits in customizable, side-by-side lanes. Users can add new subreddit feeds, with each lane showing post titles, authors, and vote counts fetched from the Reddit JSON API.',
    technologies: ['React.js', 'Typescript', 'TailwindCSS'],
    links: [
      {
        type: 'Website',
        href: 'https://redsubslist.netlify.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/redsubslist',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/KYmMgUQ.png',
    video: '',
  },
  {
    title: 'Verification Web App',
    href: 'https://image-capture-s1.netlify.app/',
    featured: false,
    description:
      'I developed a LinkedIn-like verification module using pure Vanilla JavaScript for functionality and Vanilla CSS for styling. This module replicates the seamless user experience of professional verification systems, offering an intuitive and efficient design.',
    technologies: ['Vanilla JS', 'HTML', 'CSS'],
    links: [
      {
        type: 'Website',
        href: 'https://image-capture-s1.netlify.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/image-capture-task',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/F89EH47.png',
    video: '',
  },
  {
    title: 'Time Related Tools',
    href: 'https://allclocks.netlify.app/',
    featured: true,
    description:
      'Time related tools to help you stay productive and organized.',
    technologies: ['Vanilla JS', 'CSS', 'HTML'],
    links: [
      {
        type: 'Website',
        href: 'https://allclocks.netlify.app/',
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/farhanf7n/time-app',
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/QE5jPOE.png',
    video: '',
  },
] as const;

export const uiWork = [
  {
    title: 'Coruse Creator Landing Page',
    href: 'https://dribbble.com/shots/23446136-Coruse-Creator-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Coruse%20Creator%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Coruse%20Creator%20Landing%20Page&utm_medium=Social_Share',
    featured: false,
    description:
      'A sleek landing page for users to sell courses, build communities, monetize memberships, with clean navigation and features.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23446136-Coruse-Creator-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Coruse%20Creator%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Coruse%20Creator%20Landing%20Page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/HtWXxxU.png',
    video: '',
  },
  {
    title: 'EZSauce',
    href: 'https://dribbble.com/shots/23763780-EZSauce-Find-Everything-At-One-Place',
    featured: true,
    description:
      'Explore selected and chosen items that will improve your productivity and help you grow as a developer and designer.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23763780-EZSauce-Find-Everything-At-One-Place',
        icon: <Icons.dribbble className="size-3" />,
      },
      {
        type: 'Website',
        href: 'https://ezsauce.netlify.app/',
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/Z8teOpy.png',
    video: '',
  },
  {
    title: 'Fornify - Computer Online Store',
    href: 'https://dribbble.com/shots/23477811-Shop-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Shop%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Shop%20Landing%20Page&utm_medium=Social_Share',
    featured: true,
    description:
      'A modern e-commerce landing page featuring a sleek layout, best-sellers section, trusted brand logos, and customer-focused details.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23477811-Shop-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Shop%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Shop%20Landing%20Page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/0GdCD9f.png',
    video: '',
  },
  {
    title: 'Dashboard',
    href: 'https://dribbble.com/shots/23486791-Dashboard-01?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Dashboard%20-%2001&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Dashboard%20-%2001&utm_medium=Social_Share',
    featured: true,
    description:
      'A clean, interactive dashboard design showcasing key metrics, user analytics, real-time data visualization, and customizable widget options.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23486791-Dashboard-01?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Dashboard%20-%2001&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Dashboard%20-%2001&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/PpunDhe.png',
    video: '',
  },
  {
    title: 'Twitter Banner',
    href: 'https://dribbble.com/shots/23484973-Twitter-Banner?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Twitter%20Banner&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Twitter%20Banner&utm_medium=Social_Share',
    featured: false,
    description:
      'A clean, interactive dashboard design showcasing key metrics, user analytics, real-time data visualization, and customizable widget options.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23484973-Twitter-Banner?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Twitter%20Banner&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Twitter%20Banner&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/IkVqbX2.png',
    video: '',
  },
  {
    title: 'Featured Blogs',
    href: 'https://dribbble.com/shots/23499960-Blog-Feature?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20Feature&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20Feature&utm_medium=Social_Share',
    featured: false,
    description:
      'Visually engaging featured blogs page highlighting articles with images, titles, excerpts, author details, categories, and publication dates.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23499960-Blog-Feature?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20Feature&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20Feature&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/5hpPlYz.png',
    video: '',
  },
  {
    title: 'Bunch of modals',
    href: 'https://dribbble.com/shots/23509825-Bunch-of-modals?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Bunch%20of%20modals&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Bunch%20of%20modals&utm_medium=Social_Share',
    featured: true,
    description:
      'A modern multi-step UI design featuring plan selection, seat adjustment, payment details, email verification, onboarding, and login forms.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23509825-Bunch-of-modals?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Bunch%20of%20modals&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Bunch%20of%20modals&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/yVxlEnS.png',
    video: '',
  },
  {
    title: 'Multipurpose Dashboard',
    href: 'https://dribbble.com/shots/23517739-Fornify-Dashboard?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Fornify%20-%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Fornify%20-%20Dashboard&utm_medium=Social_Share',
    featured: false,
    description:
      'A clean, user-friendly dashboard displaying categorized airdrop campaigns, user progress, rewards, navigation, and filters for streamlined task management.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23517739-Fornify-Dashboard?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Fornify%20-%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Fornify%20-%20Dashboard&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/RV0BAr4.png',
    video: '',
  },
  {
    title: 'ManyAPIs Redesigned page',
    href: 'https://dribbble.com/shots/23522992-ManyAPIs-Redesigned-page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=ManyAPIs%20Redesigned%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=ManyAPIs%20Redesigned%20page&utm_medium=Social_Share',
    featured: true,
    description:
      'A place where you can find the best APIs for your project. We have a wide range of APIs from different categories.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23522992-ManyAPIs-Redesigned-page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=ManyAPIs%20Redesigned%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=ManyAPIs%20Redesigned%20page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/q0xnymP.png',
    video: '',
  },
  {
    title: 'Travel Booking App Components',
    href: 'https://dribbble.com/shots/23547630-Travel-Booking-App-Components?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Travel%20Booking%20App%20Components&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Travel%20Booking%20App%20Components&utm_medium=Social_Share',
    featured: false,
    description:
      'Plan your journey seamlessly: choose destinations, view travel paths, explore city highlights, check traffic, apply tags, and book trains effortlessly!',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23547630-Travel-Booking-App-Components?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Travel%20Booking%20App%20Components&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Travel%20Booking%20App%20Components&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/dswM8F7.png',
    video: '',
  },
  {
    title: 'Pitch Practice',
    href: 'https://dribbble.com/shots/23565822-AI-Based-Chat-App-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=AI%20Based%20Chat%20App%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=AI%20Based%20Chat%20App%20Landing%20Page&utm_medium=Social_Share',
    featured: true,
    description:
      'The future of sales mastery. Built for financial advisors, our AI-driven platform gives you a competitive edge  with real-time role-play, targeted microlearning, and invaluable industry connections.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23565822-AI-Based-Chat-App-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=AI%20Based%20Chat%20App%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=AI%20Based%20Chat%20App%20Landing%20Page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/yIbgDP9.png',
    video: '',
  },
  {
    title: 'Electrical Engineering Consultants',
    href: 'https://dribbble.com/shots/23573282-Electrical-Engineering-Consultants-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Electrical%20Engineering%20Consultants%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Electrical%20Engineering%20Consultants%20Landing%20Page&utm_medium=Social_Share',
    featured: true,
    description:
      'Smaart Power delivers innovative, value-driven engineering solutions worldwide, blending expertise, project management, and technology for tailored, budget-friendly client results.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23573282-Electrical-Engineering-Consultants-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Electrical%20Engineering%20Consultants%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Electrical%20Engineering%20Consultants%20Landing%20Page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/iURVW4g.png',
    video: '',
  },
  {
    title: 'Kids Coloring Page',
    href: 'https://dribbble.com/shots/23630740-Kids-Coloring-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Kids%20Coloring%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Kids%20Coloring%20Page&utm_medium=Social_Share',
    featured: true,
    description:
      'Smaart Power delivers innovative, value-driven engineering solutions worldwide, blending expertise, project management, and technology for tailored, budget-friendly client results.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23630740-Kids-Coloring-Page?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Kids%20Coloring%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Kids%20Coloring%20Page&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/PWmTjyi.png',
    video: '',
  },
  {
    title: 'Portfolio',
    href: 'https://dribbble.com/shots/23593480-Portfolio?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Portfolio&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Portfolio&utm_medium=Social_Share',
    featured: true,
    description:
      'I designed my portfolio, drawing initial inspiration from an Awwwards site. Later, I customized it with unique tweaks and features to perfectly reflect my personal style.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23593480-Portfolio?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Portfolio&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Portfolio&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
      {
        type: 'Website',
        href: 'https://frhan.vercel.app/',
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/rVE4UKK.png',
    video: '',
  },
  {
    title: 'Settings Dashboard',
    href: 'https://dribbble.com/shots/23439373-Settings?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Settings&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Settings&utm_medium=Social_Share',
    featured: false,
    description:
      'This settings dashboard provides application management options, including general details, branching, taglines, advanced settings, and administrative permissions, alongside navigation to other functional modules.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/23439373-Settings?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Settings&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Settings&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/atIAlxH.png',
    video: '',
  },
  {
    title: 'Policy-Wire Redesigned',
    href: 'https://dribbble.com/shots/25517576-Blog-Article-Website-Redesign?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20%26%20Article%20Website%20Redesign&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20%26%20Article%20Website%20Redesign&utm_medium=Social_Share',
    featured: true,
    description:
      'This settings dashboard provides application management options, including general details, branching, taglines, advanced settings, and administrative permissions, alongside navigation to other functional modules.',
    technologies: ['Figma'],
    links: [
      {
        type: 'Dribbble',
        href: 'https://dribbble.com/shots/25517576-Blog-Article-Website-Redesign?utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20%26%20Article%20Website%20Redesign&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=farhanf7n&utm_content=Blog%20%26%20Article%20Website%20Redesign&utm_medium=Social_Share',
        icon: <Icons.dribbble className="size-3" />,
      },
    ],
    image: 'https://i.imgur.com/vysI2IM.png',
    video: '',
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
  {
    name: 'HTML',
    id: 0,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.html {...props} className="size-12" />
    ),
  },
  {
    name: 'CSS',
    id: 1,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.css {...props} className="size-12" />
    ),
  },
  {
    name: 'Sass',
    id: 2,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.sass {...props} className="size-12" />
    ),
  },
  {
    name: 'Tailwind',
    id: 3,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.tailwind {...props} className="size-12" />
    ),
  },
  {
    name: 'JavaScript',
    id: 4,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.javascript {...props} className="size-12" />
    ),
  },
  {
    name: 'TypeScript',
    id: 5,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.typescript {...props} className="size-12" />
    ),
  },
  {
    name: 'React',
    id: 6,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.react {...props} className="size-12" />
    ),
  },
  {
    name: 'Redux',
    id: 7,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.redux {...props} className="size-12" />
    ),
  },
  {
    name: 'Next.js',
    id: 8,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.nextjs {...props} className="size-12" />
    ),
  },
  {
    name: 'NestJS',
    id: 9,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.nestjs {...props} className="size-12" />
    ),
  },
  {
    name: 'Prisma',
    id: 10,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.prisma {...props} className="size-12" />
    ),
  },
  {
    name: 'Docker',
    id: 11,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.docker {...props} className="size-12" />
    ),
  },
  {
    name: 'Figma',
    id: 12,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.figma {...props} className="size-12" />
    ),
  },
  {
    name: 'XD',
    id: 13,
    img: (props: import('lucide-react').LucideProps) => (
      <Icons.xd {...props} className="size-12" />
    ),
  },
] as const;
