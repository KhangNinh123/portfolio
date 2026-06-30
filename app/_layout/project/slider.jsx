'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log('Autoplay prevented:', e));
    }
  }, []);

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
        ref={videoRef}
        src={source}
        loop
        controls={false}
        muted
        autoPlay
        playsInline
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          e.currentTarget.play().catch(() => {});
        }}
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (video.duration && video.currentTime >= video.duration - 0.1) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }}
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
