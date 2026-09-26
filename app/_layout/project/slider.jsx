'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 * @param {string} [props.poster]
 */
export function ProjectSlider({ type, source, poster }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || type !== 'video') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [type]);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad]);

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
        src={shouldLoad ? source : undefined}
        poster={poster}
        preload={shouldLoad ? 'metadata' : 'none'}
        loop
        controls={false}
        muted
        autoPlay
        playsInline
        className='size-full object-contain'
      />
    ) : null;

  return (
    <Center
      className='relative overflow-hidden rounded bg-[#e5e5e5] p-6'
      style={{
        width: '25vw',
        minWidth: '250px',
        height: '20vw',
        minHeight: '200px',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
