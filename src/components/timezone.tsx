'use client';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * An introduction section with a short bio.
 *
 * @param props - A set of `section` props.
 * @param [props.className] - A list of one or more classes.
 */
export function TimeZone({ className, ...props }: ComponentProps<'section'>) {
  const [timeDigits, setTimeDigits] = useState({
    hours: ['0', '0'],
    minutes: ['0', '0'],
    seconds: ['0', '0'],
  });

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };

      const currentTime = new Date().toLocaleTimeString('en-US', options);
      const [hours, minutes, seconds] = currentTime.split(':');
      setTimeDigits({
        hours: hours.split(''),
        minutes: minutes.split(''),
        seconds: seconds.split(''),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={clsx(className, 'content')} {...props}>
      <div className="mt-8 flex justify-between">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          <span className="text-muted-foreground text-xs text-[#178D00]">
            Faisalabad, Pakistan
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="flex items-center gap-2 sm:backdrop-blur-sm rounded-md"
        >
          <span className="text-muted-foreground text-xs text-[#178D00] flex items-center">
            {timeDigits.hours.map((digit, i) => (
              <motion.span
                key={`h${i}-${digit}`}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.3 }}
                className="inline-block w-[8px] text-center"
              >
                {digit}
              </motion.span>
            ))}
            <span className="animate-blink">:</span>
            {timeDigits.minutes.map((digit, i) => (
              <motion.span
                key={`m${i}-${digit}`}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.3 }}
                className="inline-block w-[8px] text-center"
              >
                {digit}
              </motion.span>
            ))}
            <span className="animate-blink">:</span>
            {timeDigits.seconds.map((digit, i) => (
              <motion.span
                key={`s${i}-${digit}`}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.3 }}
                className="inline-block w-[8px] text-center"
              >
                {digit}
              </motion.span>
            ))}
          </span>

          <span className="text-muted-foreground text-xs text-[#178D00]">
            GMT+5
          </span>
        </motion.div>
      </div>
    </section>
  );
}
