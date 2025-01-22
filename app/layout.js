import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdessalam Dakhissi',
  description: 'My personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative z-10 w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10 bg-ccchaos bg-cover bg-center opacity-60 " />

        {children}
      </body>
    </html>
  );
}
