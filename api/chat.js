export default async function handler(req, res) {
  // Configura CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // ou seu domínio específico
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Responde o preflight
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

  // Checa se a chave existe
  if (!process.env.DEEPSEEK_API_KEY) {
    console.error("ERRO: DEEPSEEK_API_KEY não configurada nas variáveis de ambiente");
    return res.status(500).json({ error: "Chave da API não configurada" });
  }

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Você é um assistente útil e amigável." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    // Log para debug
    console.log("Status DeepSeek:", response.status);
    console.log("Resposta DeepSeek:", JSON.stringify(data, null, 2));

    // Se a API deu erro
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Erro na API DeepSeek"
      });
    }

    const reply = data.choices?.[0]?.message?.content?.trim();
    res.status(200).json({
      reply: reply || "Sem resposta."
    });

  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ error: "Erro ao conectar com a IA" });
  }
}
