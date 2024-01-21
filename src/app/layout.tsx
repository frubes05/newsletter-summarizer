import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export const metadata: Metadata = {
  title: 'Newsletter summarizer',
  description: 'Summarize your reading list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-primary-200'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
