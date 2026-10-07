import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalApplication",
  "name": "Automates et langages : exercices interactifs",
  "url": "https://mpi-informatique.github.io/automates/",
  "description": "Exercices interactifs sur les automates finis, les langages réguliers et les expressions régulières pour la prépa MPI.",
  "inLanguage": "fr",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "isAccessibleForFree": true,
  "author": {
    "@type": "Person",
    "name": "Quentin Fortier",
    "url": "https://fortierq.github.io/"
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "MPI Informatique",
    "url": "https://mpi-informatique.github.io/"
  }
};

export const metadata: Metadata = {
  "title": "Automates et langages : exercices interactifs | MPI",
  "description": "Exercices interactifs sur les automates finis, les langages réguliers et les expressions régulières pour la prépa MPI.",
  "alternates": {
    "canonical": "https://mpi-informatique.github.io/automates/"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "authors": [
    {
      "name": "Quentin Fortier",
      "url": "https://fortierq.github.io/"
    }
  ],
  "icons": {
    "icon": "/automates/favicon.svg"
  },
  "openGraph": {
    "type": "website",
    "siteName": "MPI Informatique",
    "locale": "fr_FR",
    "url": "https://mpi-informatique.github.io/automates/",
    "title": "Automates et langages : exercices interactifs | MPI",
    "description": "Exercices interactifs sur les automates finis, les langages réguliers et les expressions régulières pour la prépa MPI.",
    "images": [
      {
        "url": "https://mpi-informatique.github.io/automates/og.png",
        "width": 1730,
        "height": 909,
        "alt": "Exercices sur les automates et langages"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Automates et langages : exercices interactifs | MPI",
    "description": "Exercices interactifs sur les automates finis, les langages réguliers et les expressions régulières pour la prépa MPI.",
    "images": [
      "https://mpi-informatique.github.io/automates/og.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
