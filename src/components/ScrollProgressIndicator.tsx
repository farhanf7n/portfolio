'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBarRef.current) {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollableHeight = scrollHeight - clientHeight;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY / scrollableHeight) * 100;

        scrollBarRef.current.style.transform = `translateY(-${
          100 - scrollProgress
        }%)`;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-[2%] top-[50svh] h-[100px] w-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-[#303030]">
      <div
        className="size-full rounded-full bg-[#e8ff85]"
        ref={scrollBarRef}
      ></div>
    </div>
  );
};

export default ScrollProgressIndicator;
