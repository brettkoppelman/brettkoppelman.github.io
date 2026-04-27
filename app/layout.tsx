import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brett Koppelman',
  description: 'Personal site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
