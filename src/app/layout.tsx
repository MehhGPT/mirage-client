import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import AuthProvider from "@/hooks/AuthProviser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirage Reader",
  description: "Reader for Mirage App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
