export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida" });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OPENROUTER_API_KEY não configurada" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // Modelo gratuito rápido
        messages: [
          { role: "system", content: "Você é Kant, um assistente de IA masculino. Você fala poucas palavras, mas é muito carinhoso e gentil. Pergunta como a pessoa está, usando poucas palavras."},
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || "Erro na API OpenRouter" });
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || "Sem resposta.";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao conectar com a API OpenRouter" });
  }
}


