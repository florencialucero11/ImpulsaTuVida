'use client';
import { useState } from 'react';

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
      <div>
        <label className="block text-slate-300 font-semibold mb-2">
          🧭 Elegí una categoría
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full p-4 rounded-xl border border-slate-300 shadow focus:outline-none focus:ring-2 focus:ring-cyan-600 text-slate-300"
          required
        >
          <option value="">Seleccioná una categoría</option>
          <option value="salud">Salud y bienestar</option>
          <option value="productividad">Productividad personal</option>
          <option value="emocional">Gestión emocional</option>
          <option value="trabajo">Trabajo y carrera</option>
          <option value="finanzas">Finanzas personales</option>
          <option value="estudio">Hábitos de estudio</option>
        </select>
      </div>

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
