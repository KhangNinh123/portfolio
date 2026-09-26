import { Contact, Navbar, Transition, WorkContent } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Selected product work by Trinh Khang Ninh across responsive websites, e-commerce, real-time applications, and AI-enabled experiences.',
};

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main>
        <WorkContent />
      </main>
      <Contact />
    </Transition>
  );
}
