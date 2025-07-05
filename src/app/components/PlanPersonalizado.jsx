'use client';
import { motion } from 'framer-motion';
import { Sparkles, CalendarDays, Star, BarChart3, CheckCircle, Smile } from 'lucide-react';

export default function PlanPersonalizado({ texto }) {
  return (
    <section className="mt-24 max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-center text-white mb-10"
      >
        ✨ Tu Plan Personalizado
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-white space-y-10"
      >
        {/* Parte generada por IA */}
        <div className="text-base text-slate-300 whitespace-pre-wrap leading-relaxed border-l-4 border-emerald-400 pl-4 italic">
          {texto}
        </div>

        {/* Bloques visuales de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Paso icon={Sparkles} title="Motivación">
            Escribí 3 razones que te impulsan a lograr tu objetivo. Mantenelas visibles todos los días.
          </Paso>
          <Paso icon={CalendarDays} title="Microacciones diarias">
            Diseñá acciones pequeñas de lunes a viernes. Ej: 20 min de estudio, $500 ahorrados, 1 llamada clave.
          </Paso>
          <Paso icon={BarChart3} title="Seguimiento visual">
            Usá Trello, Notion o ImpulsáTuVida para registrar lo que vas logrando.
          </Paso>
          <Paso icon={CheckCircle} title="Revisión semanal">
            Cada domingo revisá tus avances. Ajustá lo que no funcione y planificá la próxima semana.
          </Paso>
          <Paso icon={Smile} title="Recompensas">
            Celebrá tus logros con algo que disfrutes. Esto fortalece tu motivación.
          </Paso>
          <Paso icon={Star} title="Reflexión mensual">
            Evaluá si tu estrategia funciona. Reforzá lo que sirve, cambiá lo que no.
          </Paso>
        </div>
      </motion.div>
    </section>
  );
}

function Paso({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:scale-[1.02] transition shadow-md">
      <div className="mt-1">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-semibold text-emerald-300 mb-1">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

