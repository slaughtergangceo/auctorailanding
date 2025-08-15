// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://auctorai.net'), // cambialo por tu dominio real si es otro
  title: 'Auctor AI - Democratizando la Inteligencia Artificial',
  description:
    'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/auctor-logo.png',     // coloca el archivo en /public/auctor-logo.png
    shortcut: '/auctor-logo.png',
    apple: '/auctor-logo.png',
  },
  openGraph: {
    title: 'Auctor AI - Democratizando la Inteligencia Artificial',
    description:
      'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
    url: '/',
    siteName: 'Auctor AI',
    type: 'website',
    images: [{ url: '/auctor-logo.png', width: 1200, height: 630, alt: 'Auctor AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auctor AI - Democratizando la Inteligencia Artificial',
    description:
      'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
    images: ['/auctor-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
