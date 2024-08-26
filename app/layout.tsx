import '../app/globals.css';
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Auto Keyz - Jaguar Land Rover Key Replacements',
  description: 'Auto Keyz specializes in Jaguar and Land Rover key replacements, offering reliable and prompt services for key replacements, diagnostics, and more.',
  keywords: 'Jaguar key replacement, Land Rover key replacement, car key services, automotive locksmith, emergency key service',
  author: 'Auto Keyz',
  canonical: 'https://www.autokeyz.com/',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Use metadata API provided by Next.js */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload the font for faster font loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={(e) => {
            (e.target as HTMLLinkElement).media = 'all';
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Favicon for site */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}