import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Ahmad | AI Developer & Generative AI Specialist',
  description: 'Portfolio of Muhammad Ahmad - AI Developer specializing in Generative AI, LLMs, NLP, and Machine Learning. Building innovative AI-powered solutions.',
  keywords: ['AI Developer', 'Generative AI', 'LLMs', 'NLP', 'Machine Learning', 'Python', 'FastAPI', 'LangChain'],
  openGraph: {
    title: 'Muhammad Ahmad | AI Developer & Generative AI Specialist',
    description: 'Building innovative AI-powered solutions that solve real-world problems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="animated-bg" />
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}
