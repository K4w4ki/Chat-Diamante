export default async function handler(req, res) {
  // Configura CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

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
        model: "meta-llama/llama-3-8b-instruct", // modelo gratuito mais inteligente
        messages: [
          { role: "system", content: "Você é um assistente amigável, seu nome é Kant, é objetivo." },
          { role: "user", content: message }
        ],
        stream: true // habilita streaming
      })
    });

    // Define headers para streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Encaminha chunks da resposta direto para o cliente
    for await (const chunk of response.body) {
      res.write(chunk);
    }

    res.end();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar com a API OpenRouter" });
  }
}
