export async function POST(req) {
  const { prompt } = await req.json();

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Sos un coach de vida que guía a los usuarios en productividad, salud y bienestar. Ofrecé planes estructurados, realistas y positivos.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await openaiRes.json();
  return Response.json({ result: data.choices[0].message.content });
}
