'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const [localTime, setLocalTime] = useState('GMT+7');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const updateTime = () => {
      setLocalTime(`${formatter.format(new Date())} GMT+7`);
    };

    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const medias = socialMedias.map(({ href, title }) => {
    return (
      <li
        key={title}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-12 pb-4 pt-10'>
      <div className='flex flex-wrap items-stretch justify-between gap-5'>
        <div className='flex gap-8'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>{new Date().getFullYear()} © Portfolio</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-7'>
              <time>{localTime}</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex gap-8'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
