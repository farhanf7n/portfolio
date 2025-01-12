'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';
import { Fragment } from 'react';

export const Skills = () => {
  return (
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
      className="flex max-w-xl w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between"
    >
      <div className="flex overflow-hidden my-14 [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
        <motion.div
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          }}
          className="flex flex-none gap-12 pr-12"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {skillsData.map(({ icon }) => (
                <div
                  key={icon.type.name}
                  className="flex-none w-12 h-12 flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
