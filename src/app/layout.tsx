import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'
import './globals.css'
import { Blur } from '@/components/Blur'
import { Stripes } from '@/components/Stripes'
import { SingIn } from '@/components/SingIn'
import { Profile } from '@/components/Profile'
import { Hero } from '@/components/Hero'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable : '--font-roboto' })
const baiJamJuree = BaiJamJuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamJuree.variable} font-sans bg-gray-900 text-gray-100`}>
         
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden  border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

            <Blur />
      
            <Stripes />     
  
            {isAuthenticated ? <Profile /> : <SingIn />}
     
            <Hero />
  
            <Copyright />
 
          </div>

          {/* Right */}
          <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
          {children}
          </div>
        </main>
        
      </body>
    </html>
  )
}
