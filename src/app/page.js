'use client';
import { useState } from 'react';
import FormularioObjetivo from './components/FormularioObjetivo';
import ResultadoPlan from './components/ResultadoPlan';
import Beneficios from './components/Beneficios';
import ScrollRevealWrapper from './components/ScrollRevealWrapper';


export default function Home() {
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviarPrompt = ({ objetivo, categoria }) => {
    setCargando(true);
    setRespuesta('');

    fetch('/api/ia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `Categoría: ${categoria}\nObjetivo del usuario: ${objetivo}`,
      }),
    })
      .then(res => res.json())
      .then(data => setRespuesta(data.result))
      .catch(() => setRespuesta('Ocurrió un error.'))
      .finally(() => setCargando(false));
  };

  return (
   <main className="relative min-h-screen text-white px-6 py-10 flex flex-col items-center bg-slate-900 overflow-hidden">
        <img
          src="/img/inspiracion2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
     
     <section className="text-center mb-12 animate-fade-in">
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-400 drop-shadow-lg mb-4">
          Impulsá Tu Vida
        </h1>
    
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
          Tu guía inteligente para alcanzar objetivos personales, para lograr eso que tanto postergás para cumplir tus sueños... Sé el dueño de tu vida y de tus logros con el poder de la IA.
        </p>
      </section>
      <ScrollRevealWrapper>
      <Beneficios />
      </ScrollRevealWrapper>


      <section className="w-full max-w-2xl bg-white/10 mt-24 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 animate-fade-in">
        <FormularioObjetivo onSubmit={enviarPrompt} />
      </section>

      {cargando && (
        <p className="mt-6 text-cyan-300 text-lg font-medium animate-pulse">
          Generando tu plan... ✨
        </p>
      )}

      <div className="w-full max-w-2xl">
        <ResultadoPlan texto={respuesta} />
      </div>

      <footer className="mt-20 text-sm text-slate-100 text-center">
        Hecho con 💙 por Flor Lucero — 2025
      </footer>
    </main>
  );
}
