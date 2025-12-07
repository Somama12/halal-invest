"use client";
import { MOCK_STOCKS } from "@/lib/mock/stocks";
import ChartPlaceholder from "@/components/ui/ChartPlaceholder";
import BadgeHalal from "@/components/ui/BadgeHalal";
import { motion } from "framer-motion";
import { Bookmark, Calculator, TrendingUp, DollarSign, Shield } from "lucide-react";
import Link from "next/link";

export default function StockPage({ params }: { params: { ticker: string } }){
  const ticker = params.ticker.toUpperCase();
  const stock = MOCK_STOCKS.find(s => s.ticker === ticker) ?? MOCK_STOCKS[0];

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{stock.ticker} · {stock.name}</h1>
            <p className="text-slate-600 mt-1">{stock.sector} · Market cap: {stock.marketCap}</p>
          </div>
          <BadgeHalal status={stock.halalStatus}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ChartPlaceholder height={200} />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-3">Halal Analysis</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{stock.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Debt ratio</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{(stock.debtRatio*100).toFixed(0)}%</div>
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Interest income</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{(stock.interestIncomeRatio*100).toFixed(1)}%</div>
                </motion.div>
                <motion.div 
                  className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Halal score</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stock.halalScore}%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <aside className="space-y-6">
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 sticky top-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-sm font-medium text-slate-600 mb-3">Quick actions</div>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Add to Watchlist
                </button>
                <Link 
                  href="/zakat"
                  className="w-full border-2 border-slate-200 hover:border-green-500 text-slate-700 hover:text-green-600 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Zakat
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-5 rounded-xl shadow-sm border border-slate-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-bold text-lg mb-3">Similar Halal Stocks</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/stock/AMZN" className="block p-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                    <span className="font-medium">AMZN</span> — <span className="text-green-600 font-medium">Halal</span>
                  </Link>
                </li>
                <li>
                  <Link href="/stock/MSFT" className="block p-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                    <span className="font-medium">MSFT</span> — <span className="text-green-600 font-medium">Halal</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
