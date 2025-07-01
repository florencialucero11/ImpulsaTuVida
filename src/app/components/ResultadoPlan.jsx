'use client';

export default function ResultadoPlan({ texto }) {
  if (!texto) return null;

  const bloques = texto
    .split('\n')
    .filter(line => line.trim() !== '')
    .map((line, i) => (
      <div
        key={i}
        className="bg-white border-l-4 border-cyan-600 shadow-sm p-4 rounded-xl flex items-start gap-3"
      >
        <div className="text-cyan-600 text-xl">📌</div>
        <p className="text-slate-700 leading-relaxed text-base">{line.trim()}</p>
      </div>
    ));

  return (
    <div className="mt-10 bg-gradient-to-br from-white to-cyan-50 border border-cyan-300 rounded-3xl shadow-xl p-8 animate-fade-in space-y-5">
      <h2 className="text-2xl font-extrabold text-cyan-800 border-b pb-2">
        🧠 Tu Plan Personalizado
      </h2>
      {bloques}
    </div>
  );
}
