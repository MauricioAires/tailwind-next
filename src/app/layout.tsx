import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite | Dashboard',
  description: 'Dados dos alunos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <aside className="border-r border-zinc-200 px-5 py-8">aside</aside>
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
