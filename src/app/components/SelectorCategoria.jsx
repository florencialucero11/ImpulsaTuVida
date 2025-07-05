'use client';
import { useState } from 'react';

const categorias = [
  'Alimentación Saludable',
  'Productividad Personal',
  'Ahorro y Finanzas',
  'Movimiento y Ejercicio',
  'Salud Mental y Bienestar',
  'Aprendizaje y Estudio',
];

export default function SelectorCategoria({ onSelect }) {
  const [seleccionada, setSeleccionada] = useState('');

  const handleClick = (categoria) => {
    setSeleccionada(categoria);
    onSelect(categoria);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white mb-2">
        🧠 Elegí una categoría de mejora personal:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-5 py-3 rounded-xl text-white font-medium border transition-all
              ${
                seleccionada === cat
                  ? 'bg-emerald-500 border-emerald-600 shadow-lg'
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
// Este componente permite al usuario seleccionar una categoría de mejora personal.