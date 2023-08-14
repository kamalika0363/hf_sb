import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Box from '@/components/Box'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-between sm:p-8 p-2 m-2">
      <Box />
      <Footer />

      </div>
    </main>
  )
}
