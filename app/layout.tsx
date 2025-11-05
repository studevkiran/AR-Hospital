import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['400', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
}

export const metadata: Metadata = {
  title: "AR Hospital - Healing Hands | Best Hospital in Mysuru",
  description: "AR Hospital provides world-class healthcare services in Mysuru with 5+ years of dedicated medical care, expert doctors, and modern facilities.",
  keywords: "AR Hospital, Mysuru Hospital, Healthcare Mysuru, Emergency Care, Medical Services, Best Hospital Mysuru",
  authors: [{ name: "AR Hospital" }],
  openGraph: {
    title: "AR Hospital - Healing Hands",
    description: "World-class healthcare services in Mysuru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
