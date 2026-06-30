'use client';

import { Copyright } from 'lucide-react';

export function NavbarBrand() {
  return (
    <div className='group flex cursor-pointer pb-5'>
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright />
      </div>

      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Code by
        </h5>
        <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-[4.5rem]'>
          Khang
        </h5>
        <h5 className='absolute left-[7.25rem] ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-[4.5rem]'>
          Ninh
        </h5>
      </div>
    </div>
  );
}
