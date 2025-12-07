"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, Sparkles } from "lucide-react";

export default function Zakat(){
  const [cash, setCash] = useState(1000);
  const [stocks, setStocks] = useState(5000);
  const total = cash + stocks;
  const zakat = +(total * 0.025).toFixed(2);

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
            <Calculator className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Zakat Calculator</h2>
          <p className="text-slate-600">Calculate your zakat obligation on wealth and investments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Cash & Savings
            </label>
            <input 
              type="number" 
              value={cash} 
              onChange={e => setCash(Number(e.target.value))} 
              className="mt-2 border-2 border-slate-200 rounded-lg px-4 py-3 w-full focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg font-semibold" 
              placeholder="0"
            />
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Stocks & Investments
            </label>
            <input 
              type="number" 
              value={stocks} 
              onChange={e => setStocks(Number(e.target.value))} 
              className="mt-2 border-2 border-slate-200 rounded-lg px-4 py-3 w-full focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg font-semibold" 
              placeholder="0"
            />
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200 shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-medium text-slate-600 mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Total Wealth
              </div>
              <div className="text-3xl font-bold text-slate-900">${total.toLocaleString()}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-slate-600 mb-1">Zakat Rate</div>
              <div className="text-2xl font-bold text-green-700">2.5%</div>
            </div>
          </div>
          <div className="pt-6 border-t border-green-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Your Zakat Obligation</div>
            <motion.div 
              className="text-4xl font-extrabold text-green-700"
              key={zakat}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              ${zakat.toLocaleString()}
            </motion.div>
            <p className="text-xs text-slate-500 mt-3">
              This is an estimate. Please consult with a qualified Islamic scholar for final calculation.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
