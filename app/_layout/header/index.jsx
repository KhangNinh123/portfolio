'use client';

import { motion } from 'framer-motion';
import { MoveDownRight, Globe } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { isFirstLoad } from '../transition';
import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      custom={isFirstLoad}
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/img/image.png'
        className='object-contain md:scale-125'
        fill={true}
        sizes='100vw'
        alt='Trinh Khang Ninh Banner'
        unoptimized
      />

      <div className='absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center gap-8 rounded-r-full bg-[#1c1d20] py-6 pl-10 pr-6 text-white max-md:hidden'>
        <p className='text-lg font-medium leading-tight'>
          Located <br />
          in Vietnam
        </p>
        <div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gray-500/50'>
          <Globe size={36} strokeWidth={1.25} className='animate-[spin_6s_linear_infinite]' />
        </div>
      </div>
      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Trinh Khang Ninh
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Fullstack</span>
              <span className='block'>Web Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
