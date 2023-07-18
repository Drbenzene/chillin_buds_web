import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Chillin\' Buds Application",
  description: 'Chillin Buds Inventory Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <ToastContainer />
      </body>
      
    </html>
  )
}
