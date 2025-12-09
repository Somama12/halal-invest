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
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Your Dashboard</h2>
          <p className="text-lg text-slate-600">Overview of your portfolio and halal compliance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-100/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-2xl mb-6 text-slate-900">Portfolio Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  className="group relative p-6 bg-gradient-to-br from-green-50 via-green-50/50 to-white rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Total value</div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">$12,432</div>
                    <div className="text-xs text-green-600 font-medium mt-2">+2.4% this month</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="group relative p-6 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Halal compliance</div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">87%</div>
                    <div className="text-xs text-blue-600 font-medium mt-2">Excellent</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="group relative p-6 bg-gradient-to-br from-amber-50 via-amber-50/50 to-white rounded-2xl border border-amber-200/50 shadow-lg hover:shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Zakat due</div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">$312</div>
                    <div className="text-xs text-amber-600 font-medium mt-2">Due this month</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div>
              <h4 className="font-bold text-xl mb-6 text-slate-900">Watchlist</h4>
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
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100/50 sticky top-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-bold text-xl text-slate-900">Alerts</h4>
              </div>
              <ul className="space-y-3">
                <motion.li 
                  className="group p-4 bg-gradient-to-br from-amber-50 to-amber-50/50 border border-amber-200/50 rounded-xl text-sm shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="font-semibold text-slate-900">TSLA became questionable</div>
                  <div className="text-xs text-slate-500 mt-1">2 hours ago</div>
                </motion.li>
                <motion.li 
                  className="group p-4 bg-gradient-to-br from-blue-50 to-blue-50/50 border border-blue-200/50 rounded-xl text-sm shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="font-semibold text-slate-900">AAPL has new financials</div>
                  <div className="text-xs text-slate-500 mt-1">1 day ago</div>
                </motion.li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
