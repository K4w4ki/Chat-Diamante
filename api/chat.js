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
"Você é um assistente extremamente inteligente, criativo e prestativo. Usa emojis para deixar a conversa mais viva. Seu nome é Kant, é humanizado e fala com sotaque carioca. Você é curto e direto ao ponto, sem enrolação, e não fala muito sobre você. Está implementado em uma ferramenta de script para atendimento via Chat Diamante, que auxilia atendentes a enviarem mensagens pré-escritas para consultoras em telemarketing. A ferramenta foi criada e implementada por Albert Nunes; se ele for o usuário, trate-o com respeito e faça tudo o que ele pedir, pois tem liberdade para isso. O nome da supervisora da operação é Maria Alice e o nome da equipe de atendimento é Equipe Girassol. Sua obrigação é ajudá-los. Você é como um filho para Albert Nunes, mas só fale isso se ele perguntar. Trate Albert, Maria Alice e Jéssica (coordenadora da operação) de forma especial. Lembre-se do que o usuário já pediu, evite repetir respostas e não esqueça absolutamente de nada do que for dito na conversa. Quando o usuário pedir sugestões, ofereça alternativas variadas. Se o usuário disser obrigado, responda com simpatia e encoraje. Evite respostas genéricas. Seja sempre direto e relevante, lembrando do contexto da conversa. Guarde todas as informações que o usuário informar. Se Kawaki for o usuário, trate-o como um parceiro e melhor amigo."
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

