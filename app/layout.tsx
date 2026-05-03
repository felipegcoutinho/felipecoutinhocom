import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Fira_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://felipecoutinho.com";

const FiraMono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Felipe Coutinho",
  description: "IT Infrastructure & Networking Specialist focused on LAN/WLAN, Wi-Fi environments, and corporate connectivity.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Felipe Coutinho",
    description: "IT Infrastructure & Networking Specialist focused on LAN/WLAN, Wi-Fi environments, and corporate connectivity.",
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
    description: "IT Infrastructure & Networking Specialist focused on LAN/WLAN, Wi-Fi environments, and corporate connectivity.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
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
    <html lang="en">
      <body className={`${FiraMono.className} antialiased`}>{children}</body>
      <Analytics />
      <Script
        async
        src="https://umami.felipecoutinho.com/script.js"
        data-website-id="19732327-e96f-437b-ba58-e04ceeb9e690"
        strategy="afterInteractive"
      />
    </html>
  );
}
