import './globals.css';
import { meta } from '@/content/meta';

export const metadata = {
  title: `${meta.name} — ${meta.designation}`,
  description: meta.tagline,
  openGraph: {
    type: 'website',
    title: `${meta.name} — ${meta.designation}`,
    description: meta.tagline,
    siteName: meta.name,
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: meta.name,
              email: meta.email,
              jobTitle: meta.designation,
              description: meta.tagline,
              sameAs: [meta.links.github, meta.links.linkedin].filter(Boolean),
              alumniOf: { '@type': 'CollegeOrUniversity', name: meta.institution },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
