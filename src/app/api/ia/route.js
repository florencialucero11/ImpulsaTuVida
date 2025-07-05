import { NextResponse } from 'next/server';

export async function POST(req) {
  const { categoria, objetivo } = await req.json(); // asegurate de que el frontend mande ambos

  const prompt = `
Actuá como un coach de vida experto y creá un plan personalizado para el siguiente objetivo del usuario.

🔹 Categoría del objetivo: ${categoria}
🔹 Objetivo personal: ${objetivo}

Tené en cuenta estos puntos:
- El plan debe ser claro, práctico y con pasos accionables.
- Dividí el objetivo en metas semanales o diarias.
- Incluí motivación emocional (por qué lograrlo).
- Usá un lenguaje empático y fácil de entender.
- El resultado debe inspirar, orientar y dar estructura.

Respondé de forma organizada, usando viñetas o títulos si es necesario.
Respondé todo en español.
`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3-70b-instruct', 
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No se generó respuesta.';
    return NextResponse.json({ result: text });

  } catch (error) {
    console.error('Error IA:', error);
    return NextResponse.json({ result: 'Error al generar el plan.' }, { status: 500 });
  }
}

