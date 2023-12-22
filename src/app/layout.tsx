import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import localFont from '@next/font/local'
import './globals.css'

const font = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
