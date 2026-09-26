/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://pyspace.id.vn/'),
  title: {
    template: '%s | Trinh Khang Ninh',
    default: 'Trinh Khang Ninh • Fullstack Web Developer',
  },
  description:
    'Fullstack web developer building production applications with React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, and real-time technologies.',
  generator: 'Trinh Khang Ninh',
  applicationName: 'Trinh Khang Ninh',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Fullstack Development',
    'UI/UX',
    'Product Development',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Trinh Khang Ninh', url: 'https://pyspace.id.vn/' }],
  creator: 'Trinh Khang Ninh',
  publisher: 'Trinh Khang Ninh',
  twitter: {
    card: 'summary_large_image',
    title: 'Trinh Khang Ninh',
    description:
      'Fullstack web developer specializing in React, Next.js, Node.js, and production web applications.',
    images: {
      url: '/img/TheKas.png',
      alt: 'Trinh Khang Ninh portfolio preview',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
