import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Subspace - Agentic Analysis Platform for Research Labs',
  description: 'Subspace connects to existing lab data and turns scientific questions into reusable, validated datasets. Explore data, test hypotheses, and generate analysis-ready outputs through natural language.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="animated-bg" />
        <div className="grid-overlay" />
        <Header />
        {children}
      </body>
    </html>
  )
}
