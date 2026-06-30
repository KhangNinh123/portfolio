'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-contain'
        fill={true}
        alt='project items'
        unoptimized
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={source}
        loop
        controls={false}
        muted
        autoPlay
        playsInline
        onEnded={(e) => e.currentTarget.play()}
        className='h-full w-full object-contain'
      />
    ) : null;

  return (
    <Center
      className='relative rounded overflow-hidden p-6 bg-[#e5e5e5]'
      style={{
        width: '25vw',
        minWidth: '250px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
