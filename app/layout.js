import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethereum 2.0',
  description: 'Ethereum 2.0 on DxSale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='main.jpeg'></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
