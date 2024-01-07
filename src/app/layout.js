import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/organismes/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextflix',
  description: 'Nextflix est un catalogue de films en ligne',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
