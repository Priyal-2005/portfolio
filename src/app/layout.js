import './globals.css';

export const metadata = {
  metadataBase: new URL('https://priyalsarda.dev'), // Update to real domain if different
  title: 'Priyal Sarda | Full-Stack Engineer & Founder',
  description: 'Portfolio of Priyal Sarda, a Full-Stack Engineer, Founder of PhotoDost, and Co-Founder of Coding Champs. Specializing in React, Next.js, modern web technologies, and AI solutions.',
  keywords: ['Priyal Sarda', 'Full-Stack Developer', 'AI Enthusiast', 'React Developer', 'Next.js', 'Portfolio', 'Software Engineer', 'Coding Champs', 'PhotoDost'],
  authors: [{ name: 'Priyal Sarda' }],
  creator: 'Priyal Sarda',
  openGraph: {
    title: 'Priyal Sarda | Full-Stack Engineer',
    description: 'Transforming ideas into impactful solutions. Explore my projects, skills, and journey.',
    url: 'https://priyalsarda.dev', 
    siteName: 'Priyal Sarda Portfolio',
    images: [
      {
        url: '/images/profile.JPG', 
        width: 1200,
        height: 630,
        alt: 'Priyal Sarda Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyal Sarda | Full-Stack Engineer',
    description: 'Full-Stack Engineer & Founder of PhotoDost and Coding Champs. Building scalable applications.',
    images: ['/images/profile.JPG'], 
    creator: '@priyalsarda',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://priyalsarda.dev',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}