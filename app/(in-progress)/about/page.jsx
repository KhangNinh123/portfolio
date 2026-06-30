import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in Vietnam. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Khang Ninh',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}
