import { NextResponse } from 'next/server';

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [{ role: 'user', content: prompt }],
      })
    });

    const data = await response.json();

    const text = data.choices?.[0]?.message?.content || 'No se generó respuesta.';
    return NextResponse.json({ result: text });
  } catch (error) {
    console.error('Error IA:', error);
    return NextResponse.json({ result: 'Error en la generación de IA.' }, { status: 500 });
  }
}
