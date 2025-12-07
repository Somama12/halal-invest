import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/50 backdrop-blur-sm w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <div className="font-medium">© {new Date().getFullYear()} HalalInvest. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-green-600 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-green-600 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
