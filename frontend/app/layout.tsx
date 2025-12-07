import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "HalalInvest",
  description: "Halal investing — screening, portfolio tracking & zakat.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="w-full">
      <body className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
