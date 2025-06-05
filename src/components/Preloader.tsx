'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power1.inOut',
        },
      });

      tl.to('.name-text span', {
        y: 0,
        stagger: 0.05,
        duration: 0.2,
      });

      tl.to('.preloader-item', {
        delay: 1,
        y: '100%',
        duration: 0.5,
        stagger: 0.1,
      })
        .to('.name-text span', { autoAlpha: 0 }, '<0.5')
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
          },
          '<1'
        );
    },
    { scope: preloaderRef }
  );

  return (
    <div className="fixed inset-0 z-[99999] flex" ref={preloaderRef}>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>
      <div className="preloader-item h-full w-[10%] bg-black"></div>

      <p className="name-text absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[20vw] font-black leading-none text-white lg:text-[200px]">
        <span className="inline-block translate-y-full">F</span>
        <span className="inline-block translate-y-full">A</span>
        <span className="inline-block translate-y-full">R</span>
        <span className="inline-block translate-y-full">H</span>
        <span className="inline-block translate-y-full">A</span>
        <span className="inline-block translate-y-full">N</span>
      </p>
    </div>
  );
};

export default Preloader;
