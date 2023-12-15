import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aracomp',
  description: 'Evento de computação do UFAL-Arapiraca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#1E1E1E] text-white ${inter.className}`}>{children}</body>
    </html>
  )
}
