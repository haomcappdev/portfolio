import '@mantine/core/styles.css';
import './globals.css';

import type { Metadata } from 'next';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const theme = createTheme({
  components: {
    Title: {
      styles: {
        root: {
          color: 'rgb(255, 255, 0)',
        },
      },
    },
    Text: {
      styles: {
        root: {
          color: 'rgb(156 163 175)',
        },
      },
    },
    List: {
      styles: {
        item: {
          color: 'rgb(156 163 175)',
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
