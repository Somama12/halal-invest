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
      <body className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-green-50/30 text-slate-900 antialiased">
        {/* Background pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <Navbar />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-200px)] relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
