
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModaL from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Property Booking App',
  description: 'Find the most luxurious and cosy houses to make your trip one to remember',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      <ToasterProvider/>  
      <LoginModaL/>
      <SearchModal/>
      <RentModal/>
      <RegisterModal/>
      <Navbar currentUser={currentUser}/>
      <div className='pb-20 pt-28'>
        {children}
      </div>
        </body>
    </html>
  )
}
