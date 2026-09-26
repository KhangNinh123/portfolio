import { AboutContent, Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Meet Trinh Khang Ninh, a fullstack web developer working across React, Next.js, Node.js, databases, and real-time systems.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Contact />
    </Transition>
  );
}
