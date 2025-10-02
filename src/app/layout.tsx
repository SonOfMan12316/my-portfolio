import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const poppinsSans = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppi-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Emanyo Charles - Software Engineer Front End',
    template: '%s | Emanyo Charles',
  },
  description:
    'Software Engineer Front-End specialized in Vue, React, TypeScript, Tailwind, Node.js and Firebase. I transform ideas into modern, accessible, and high-performance digital experiences.',
  authors: [
    { name: 'Emanyo Charles', url: 'https://emanyo-charles.vercel.app/' },
  ],
  creator: 'Emanyo Charles',
  publisher: 'Emanyo Charles',
  metadataBase: new URL('https://emanyo-charles.vercel.app/'),
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Emanyo Charles',
    'Frontend',
    'Software Engineer',
    'Frontend Developer',
    'Vue',
    'React',
    'Tailwind',
    'JavaScript',
    'Next.js',
    'HTML',
    'CSS',
    'Express',
    'MongoBD',
    'Firebase',
    'Web Developer',
    'Micro-SaaS',
    'UI Developer',
    'Developer Portfolio',
  ],
  openGraph: {
    title:
      'Emanyo Charles - Software Engineer Front End | Vue, React, Tailwind',
    description:
      'Software Engineer Front-End specialized in Vue, React, TypeScript, Tailwind, Node.js and Firebase. I transform ideas into modern, accessible, and high-performance digital experiences.',
    url: 'https://emanyo-charles.vercel.app/',
    siteName: 'Emanyo Charles',
    locale: 'en_US',
    type: 'website',
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
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>
        <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  )
}
