import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coolclean',
  description: 'Coolclean',
  generator: 'Coolclean',
  icons: {
    icon: 'https://www.coolclean.com/wp-content/uploads/2023/12/logo.png',
  },
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
