import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hugging Face',
  description: 'Created Using Next.js, Hugging Face and Supabase'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
