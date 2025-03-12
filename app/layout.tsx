import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coolclean',
  description: 'Coolclean',
  generator: 'Coolclean',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
