import Navabr from '@/components/Navabr'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'You can find your car here .',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Navabr/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
