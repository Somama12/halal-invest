import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

export default function BadgeHalal({ status }: { status: string }) {
  const map: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
    Halal: {
      bg: "bg-green-100 text-green-800 border-green-200",
      text: "text-green-800",
      icon: <CheckCircle className="w-3 h-3" />
    },
    Questionable: {
      bg: "bg-yellow-100 text-yellow-800 border-yellow-200",
      text: "text-yellow-800",
      icon: <AlertCircle className="w-3 h-3" />
    },
    Mixed: {
      bg: "bg-amber-100 text-amber-800 border-amber-200",
      text: "text-amber-800",
      icon: <AlertCircle className="w-3 h-3" />
    },
    NotHalal: {
      bg: "bg-red-100 text-red-800 border-red-200",
      text: "text-red-800",
      icon: <XCircle className="w-3 h-3" />
    },
  };
  
  const config = map[status] ?? {
    bg: "bg-slate-100 text-slate-800 border-slate-200",
    text: "text-slate-800",
    icon: null
  };
  
  return (
    <motion.span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${config.bg}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {config.icon}
      {status === "NotHalal" ? "Not Halal" : status}
    </motion.span>
  );
}
