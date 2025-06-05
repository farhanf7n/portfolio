import { useEffect, useState } from 'react';

export function useBreakpoint(breakpoint: number) {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const check = () => setIsBelow(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isBelow;
}
