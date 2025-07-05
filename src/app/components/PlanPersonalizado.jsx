'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Flame, Target, Sparkles, Brain, CalendarCheck } from 'lucide-react';

export default function PlanPersonalizado({ texto }) {
  return (
    <section className="mt-20 max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-emerald-300 mb-6 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6" /> Tu Plan Personalizado
        </h2>

        <div className="text-slate-200 space-y-6 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
          {texto.split('\n').map((line, index) => (
            <p key={index} className="flex items-start gap-2">
              <span>{line}</span>
            </p>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-emerald-200 text-sm italic">
          Recordá: tu constancia diaria es lo que convierte los sueños en logros 🌱
        </div>
      </motion.div>
    </section>
  );
}
