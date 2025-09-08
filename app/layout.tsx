import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe Coutinho",
  description: "Personal website of Felipe Coutinho",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Felipe Coutinho",
    description: "Personal website of Felipe Coutinho",
    url: siteUrl,
    siteName: "Felipe Coutinho",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Felipe Coutinho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Coutinho",
    description: "Personal website of Felipe Coutinho",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: { "pt-BR": siteUrl },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${InterFont.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
