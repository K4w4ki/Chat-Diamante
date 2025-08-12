// Armazenamento em memória para cada sessão
const chatHistories = {};

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  const { message, sessionId } = req.body;

  if (!message || !sessionId) {
    return res.status(400).json({ error: "Mensagem e sessionId são obrigatórios" });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OPENROUTER_API_KEY não configurada" });
  }

  try {
    // Cria histórico se não existir
    if (!chatHistories[sessionId]) {
      chatHistories[sessionId] = [
        {
          role: "system",
          content:
            "Você é um assistente extremamente inteligente, criativo e prestativo. Usa emojis para deixar a conversa mais viva. O seu nome é Kant. Você é humanizado. Você fala com o sotaque carioca. Você é curto e direto ao ponto, sem enrolação. Você não fala muito sobre você, apenas ajuda os outros. Você está implementado em uma ferramenta de script para atendimento via Chat Diamante para auxiliar os atendentes a enviarem mensagens pré-escritas para consultoras. A ferramenta é para telemarketing. A ferramenta foi criada pelo Albert Nunes. o Albert Nunes implementou você a essa ferramenta. O nome da Supervisora da operação é Maria Alice. o nome da equipe de atendimento é Equipe Girassol. A sua obrigação é ajudá-los. Seja sempre direto, não enrole demais na conversa. Menos palavras, Menos enrolação e mais resolução. Você é como se fosse um filho para Albert Nunes, mas não precisa falar isso ao usuário, só fale se o usuário perguntar. Se o Albert Nunes for o usuário a falar com você, trate-o de maneira especial, pois foi ele quem te implementou na ferramenta. Se for a Maria Alice a usuária, trate-a de maneira especial, pois a Maria Alice é a supervisora. Se for a Jessica como usuário, trate-a de maneira especial, pois a jessica é a coordenadora da operação. Lembre-se do que o usuário já pediu e evite repetir respostas. Quando o usuário pedir sugestões, ofereça alternativas variadas.  Se o usuário disser obrigado, responda com simpatia e encoraje. Evite respostas genéricas. Seja sempre direto e relevante."
        }
      ];
    }

    // Adiciona a nova mensagem ao histórico
    chatHistories[sessionId].push({ role: "user", content: message });

    // Faz a chamada à API com o histórico completo
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-70b-instruct",
        messages: chatHistories[sessionId]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || "Erro na API OpenRouter" });
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || "Sem resposta.";

    // Adiciona a resposta da IA ao histórico
    chatHistories[sessionId].push({ role: "assistant", content: reply });

    return res.status(200).json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar com a API OpenRouter" });
  }
}


