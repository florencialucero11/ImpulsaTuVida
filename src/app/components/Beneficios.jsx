import { Brain, Zap, Globe, Smartphone } from 'lucide-react';
import ScrollRevealWrapper from '../components/ScrollRevealWrapper';

export default function Beneficios() {
  const items = [
    {
      icono: <Brain size={32} className="text-emerald-400" />,
      titulo: 'IA a tu servicio',
      texto: 'Recibí planes 100% personalizados según tu meta personal.',
    },
    {
      icono: <Zap size={32} className="text-emerald-400" />,
      titulo: 'Respuestas en segundos',
      texto: 'Ingresás tu objetivo y en un clic obtenés tu plan de acción.',
    },
    {
      icono: <Globe size={32} className="text-emerald-400" />,
      titulo: 'Para todos y todas',
      texto: 'Funciona para cualquier objetivo: salud, carrera, finanzas, etc.',
    },
    {
      icono: <Smartphone size={32} className="text-emerald-400" />,
      titulo: 'Accesible desde cualquier lugar',
      texto: 'App 100% responsiva. Llevá tu progreso donde vayas.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
        ¿Por qué usar <span className="text-emerald-400">ImpulsáTuVida</span>?
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map(({ icono, titulo, texto }, i) => (
          <ScrollRevealWrapper key={i} delay={i * 0.2}>
            <div className="flex items-start gap-4 bg-white/10 border border-white/10 p-6 rounded-3xl shadow-xl backdrop-blur-xl hover:scale-[1.02] transition-transform">
              <div>{icono}</div>
              <div>
                <h3 className="text-xl font-bold text-emerald-300 mb-1">{titulo}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{texto}</p>
              </div>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </section>
  );
}
