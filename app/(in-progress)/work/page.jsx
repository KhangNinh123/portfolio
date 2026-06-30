import { Contact, Navbar, Transition, WorkContent } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Trinh Khang Ninh',
  description:
    'A showcase of digital products, interactive websites, and e-commerce platforms developed by Trinh Khang Ninh.',
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
