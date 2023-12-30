import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

import { Be_Vietnam_Pro } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight : ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Manage Landing Page | Frontend Mentor',
  description: 'This challenge is about a landing page of the website Frontend Mentor, this landing page has functionalities, animations and is responsive web.',
  alternates: {
    canonical: '/',
  },
  openGraph : {
    title : 'Manage Landing Page | Frontend Mentor',
    description : 'Landing page Responsive for Manage, challengue of the Frontend Mentor',
    images : [
      {
        url : '/images/manage-screenshot.jpg',
        width : 800,
        height : 600,
        alt : 'Manage landing page screenshot'
      }
    ],
    locale : 'en_US',
    type : 'website'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
        <Header />
        <main className='bg-pattern-desktop bg-no-repeat bg-right-top '>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
