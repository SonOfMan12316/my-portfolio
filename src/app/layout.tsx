import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import InitialLoadScreen from './components/molecules/InitialLoadScreen'
import Script from 'next/script'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Emanyo Charles — Full Stack & Mobile Engineer',
    template: '%s | Emanyo Charles',
  },
  description:
    'Full Stack & Mobile Engineer with 5+ years of experience building production-grade React and TypeScript products, fullstack systems, and cross-platform mobile apps.',
  authors: [
    { name: 'Emanyo Charles', url: 'https://emanyo-charles.vercel.app/' },
  ],
  creator: 'Emanyo Charles',
  publisher: 'Emanyo Charles',
  metadataBase: new URL('https://emanyo-charles.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Emanyo Charles',
    'Full Stack & Mobile Engineer',
    'Software Engineer',
    'Fullstack Engineer',
    'Cross-platform Mobile Engineer',
    'React',
    'TypeScript',
    'Next.js',
    'NestJS',
    'Node.js',
    'Tailwind',
    'JavaScript',
    'Performance Optimization',
    'Web Applications',
    'Product Engineering',
    'Developer Portfolio',
  ],
  openGraph: {
    title: 'Emanyo Charles — Full Stack & Mobile Engineer',
    description:
      'Full Stack & Mobile Engineer with 5+ years of experience building production-grade React and TypeScript products, fullstack systems, and cross-platform mobile apps.',
    url: 'https://emanyo-charles.vercel.app/',
    siteName: 'Emanyo Charles',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emanyo Charles — Full Stack & Mobile Engineer',
    description:
      'Full Stack & Mobile Engineer with 5+ years of experience building production-grade React and TypeScript products, fullstack systems, and cross-platform mobile apps.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  category: 'technology',
  classification: 'Software Engineer',
  applicationName: 'Emanyo Charles Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emanyo Charles',
    url: 'https://emanyo-charles.vercel.app/',
    jobTitle: 'Full Stack & Mobile Engineer',
    sameAs: [
      'https://github.com/SonOfMan12316',
      'https://www.linkedin.com/in/charles-emanyo-a56457233',
      'https://x.com/mancyDev',
    ],
  }

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <InitialLoadScreen />
        <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  )
}
