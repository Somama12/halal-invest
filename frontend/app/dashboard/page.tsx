"use client";
import StockCard from "@/components/ui/StockCart";
import { MOCK_STOCKS } from "@/lib/mock/stocks";
import { motion } from "framer-motion";
import { TrendingUp, Shield, DollarSign, Bell } from "lucide-react";

export default function Dashboard(){
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2">Your Dashboard</h2>
        <p className="text-slate-600 mb-8">Overview of your portfolio and halal compliance</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">Portfolio Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Total value</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">$12,432</div>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Halal compliance</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">87%</div>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Zakat due</div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">$312</div>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Watchlist</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_STOCKS.map((s, index) => (
                  <motion.div
                    key={s.ticker}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <StockCard stock={s} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-amber-600" />
                <h4 className="font-bold text-lg">Alerts</h4>
              </div>
              <ul className="space-y-3">
                <motion.li 
                  className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="font-medium text-slate-900">TSLA became questionable</div>
                  <div className="text-xs text-slate-500 mt-1">2 hours ago</div>
                </motion.li>
                <motion.li 
                  className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="font-medium text-slate-900">AAPL has new financials</div>
                  <div className="text-xs text-slate-500 mt-1">1 day ago</div>
                </motion.li>
              </ul>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
