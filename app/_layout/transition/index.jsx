'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

export let isFirstLoad = true;

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
      if (isFirstLoad) {
        isFirstLoad = false;
      }
    },
    duration: isFirstLoad ? 3800 : 100,
    deps: [pathname],
  });

  return (
    <div key={pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader isFirstLoad={isFirstLoad} /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
