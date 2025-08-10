// api/chat.js (Vercel Serverless Function)
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = req.body;
    if (!body || !body.messages) return res.status(400).json({ error: "Missing messages" });

    // Proteções básicas
    const messages = body.messages.slice(-40); // corta para últimos 40
    // opcional: sanitização (remover arquivos, etc)

    const OPENAI_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_KEY) return res.status(500).json({ error: "API key not configured" });

    // Monta payload pro endpoint de Chat Completions (compatível)
    const payload = {
      model: "gpt-4o-mini", // escolha o modelo que você quiser
      messages: messages.map(m => {
        // converte roles: assistant <-> system etc
        const role = m.role === "assistant" ? "assistant" : (m.role === "user" ? "user" : "system");
        return { role, content: m.content };
      }),
      max_tokens: 700,
      temperature: 0.2
    };

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      const text = await r.text();
      console.error("OpenAI error", r.status, text);
      return res.status(502).json({ error: "Error from OpenAI", status: r.status, detail: text });
    }

    const data = await r.json();
    // Extrai a resposta principal:
    const reply = data.choices?.[0]?.message?.content ?? (data.choices?.[0]?.text ?? "");

    // Retorna de forma simples para o front
    return res.status(200).json({ reply, raw: data });
  } catch (err) {
    console.error("handler-error", err);
    return res.status(500).json({ error: "Server error", detail: err.message });
  }
}

