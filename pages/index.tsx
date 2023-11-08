import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/landingpage/Navbar'
import { Explorecolumn } from '@/components/landingpage/Explorecolumn'
import { Howitworks } from '@/components/landingpage/Howitworks'
import { Becomemember } from '@/components/landingpage/Becomemember'
import { Sharecolumn } from '@/components/landingpage/Sharecolumn'
import { Testimonial } from '@/components/landingpage/Testimonial'
import { Newsletter } from '@/components/landingpage/Newsletter'
import { Footer } from '@/components/landingpage/Footer'
import { Riskchecker } from '@/components/landingpage/Riskchecker'
import Faq from '@/components/landingpage/Faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#2b3835] ${inter.className}`}
    >
      <Navbar/>

      <Explorecolumn/>

      <Howitworks/>

      <Riskchecker/>

      <Becomemember/>

      <Sharecolumn/>

      <Testimonial/>

      <Faq/>
      
      <Newsletter/>

      <Footer/>
    </main>
  )
}
