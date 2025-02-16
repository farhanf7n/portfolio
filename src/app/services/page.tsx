import styles from '../layout.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Contact } from '@/components/sections/contact';
import { Faq } from '@/components/sections/faq';
import { Pricing } from '@/components/sections/pricing';
import { Services } from '@/components/sections/services';
import Testimonial from '@/components/sections/testimonial';
import { Skills } from '@/components/skills';
import { ThemeToggle } from '@/components/theme-toggle';

const Home = async () => {
  return (
    <>
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
      <div className="container relative flex flex-col items-center">
        <Navbar />
        <Services />
        <Skills />
        <Pricing />
        <Testimonial />
        <Faq />
        <Contact />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
