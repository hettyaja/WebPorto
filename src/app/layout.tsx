import type { Metadata } from "next";
import localFont from "next/font/local"; // Uncommented for local fonts
import { Inter } from 'next/font';
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
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
