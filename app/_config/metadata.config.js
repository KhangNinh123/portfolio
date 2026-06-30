/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://dennis-snellenberg-portfolio.vercel.app/'),
  title: {
    template: '%s | Trinh Khang Ninh',
    default: 'Trinh Khang Ninh • Fullstack Web Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in Vietnam. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Khang Ninh',
  generator: 'Trinh Khang Ninh',
  applicationName: 'Trinh Khang Ninh',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Ali Bagheri', url: 'https://www.github.com/alibagheri2079' },
  ],
  creator: 'Ali Bagheri',
  publisher: 'Ali Bagheri',
  twitter: {
    card: 'summary_large_image',
    title: 'Trinh Khang Ninh',
    description:
      'Helping brands thrive in the digital world. Located in Vietnam. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Khang Ninh',
    siteId: '1467726470533754880',
    creator: '@TrinhKhangNinh',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://dennis-snellenberg-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
