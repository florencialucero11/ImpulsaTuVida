'use client';
import { useState } from 'react';
import SelectorCategoria from './SelectorCategoria';

export default function FormularioObjetivo({ onSubmit }) {
  const [objetivo, setObjetivo] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoria || !objetivo) return;
    onSubmit({ objetivo, categoria });
    setObjetivo('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SelectorCategoria onSelect={setCategoria} />

      <div>
        <label className="block text-slate-300 font-semibold mb-2">
          ✍️ Escribí tu objetivo personal
        </label>
        <textarea
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          rows="4"
          placeholder="Ej: Quiero organizar mi tiempo, comer más saludable, conseguir trabajo..."
          className="w-full p-4 rounded-xl border border-slate-300 shadow focus:outline-none focus:ring-2 focus:ring-cyan-600 text-slate-200"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-400 text-white font-bold py-3 rounded-xl hover:bg-cyan-800 transition"
      >
        Crear plan personalizado ✨
      </button>
    </form>
  );
}
