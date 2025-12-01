export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriela Birger',
    jobTitle: 'Psicanalista',
    description: 'Psicanalista, filósofa e idealizadora do com.verso',
    url: 'https://gabrielabirger.com.br',
    image: 'https://gabrielabirger.com.br/images/gabriela-birger.jpg',
    sameAs: [
      'https://www.instagram.com/_com.verso_',
      'https://open.spotify.com/show/3NZGaOQD79tO12wuOhLZf9',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Dr. Guilherme Bannitz, 126 - CJ 82',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '04532-010',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-98292-5279',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

