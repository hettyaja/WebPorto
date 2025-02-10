import type { Metadata } from "next";
import localFont from "next/font/local"; // Uncommented for local fonts
import { Inter } from 'next/font/google';
import Navbar from "../../components/Navbar";
import './globals.css';

// Load Inter from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Load Geist Sans and Geist Mono locally
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hetty",
  description: "Hetty Portfolio",
  icons:{
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
