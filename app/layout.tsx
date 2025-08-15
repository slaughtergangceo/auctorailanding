export const metadata: Metadata = {
  title: 'Auctor AI — Democratizando la Inteligencia Artificial',
  description:
    'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
  icons: {
    icon: '/auctor-logo.png',     // ✅ se sirve desde /public
    shortcut: '/auctor-logo.png', // ✅ idem
    apple: '/auctor-logo.png',    // ✅ opcional para iOS
  },
  openGraph: {
    title: 'Auctor AI — Democratizando la Inteligencia Artificial',
    description:
      'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
    url: 'https://www.auctorai.net', // asegurate de usar tu dominio real
    siteName: 'Auctor AI',
    type: 'website',
    images: [
      {
        url: '/auctor-logo.png',  // ✅ ya está bien así
        width: 1200,
        height: 630,
        alt: 'Auctor AI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auctor AI — Democratizando la Inteligencia Artificial',
    description:
      'En Auctor AI creemos que la inteligencia artificial no debería ser un lujo, sino una herramienta de crecimiento accesible para todos.',
    images: ['/auctor-logo.png'], // ✅ corregido
  }
}
