// chat.js - Frontend chat UI + integração com /api/chat
(() => {
  const botaoChat = document.getElementById("botaoChat");
  const painel = document.getElementById("painelChat");
  const fechar = document.getElementById("fecharChat");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messagesArea = document.getElementById("chatMessages");
  const sendBtn = document.getElementById("sendBtn");

  const STORAGE_KEY = "chat_diamante_session_v1";

  // Carrega histórico da sessão
  let session = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (!session) {
    session = {
      createdAt: Date.now(),
      messages: [
        { role: "system", content: "Você é o assistente da Equipe Girassol. Seja cordial e objetivo." }
      ]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  function saveSession() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  function renderMessages() {
    messagesArea.innerHTML = "";
    session.messages.forEach((m, i) => {
      if (m.role === "system") return; // não mostrar system
      const div = document.createElement("div");
      div.className = `bubble ${m.role === "user" ? "user" : "bot"}`;
      div.textContent = m.content;
      messagesArea.appendChild(div);
    });
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function addLocalMessage(role, content) {
    session.messages.push({ role, content });
    saveSession();
    renderMessages();
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "bubble bot typing";
    el.id = "typingIndicator";
    el.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
    messagesArea.appendChild(el);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById("typingIndicator");
    if (t) t.remove();
  }

  // abrir/fechar
  botaoChat.addEventListener("click", () => { painel.style.display = "flex"; renderMessages(); input.focus(); });
  fechar.addEventListener("click", () => { painel.style.display = "none"; });

  // submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    // limita tamanho do input para evitar abuso:
    if (text.length > 2000) {
      alert("Mensagem muito longa (máx 2000 caracteres).");
      return;
    }

    // mostra mensagem do usuário
    addLocalMessage("user", text);
    input.value = "";
    input.disabled = true;
    sendBtn.disabled = true;

    // mostra typing
    showTyping();

    try {
      // envia para backend
      const payload = { messages: session.messages.slice(-30) }; // envia últimos 30 msgs
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!r.ok) {
        throw new Error(`Erro ${r.status}`);
      }

      const data = await r.json();
      // espera estrutura: { reply: "texto do bot" } (veja backend)
      const reply = data.reply ?? (data.choices && data.choices[0]?.message?.content) ?? "Desculpe, sem resposta.";

      removeTyping();
      addLocalMessage("assistant", reply);

    } catch (err) {
      removeTyping();
      addLocalMessage("assistant", "Desculpe — não foi possível conectar ao servidor. Tente novamente mais tarde.");
      console.error("chat error:", err);
    } finally {
      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
    }
  });

  // render inicial
  renderMessages();

  // atalho: Esc fecha
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") painel.style.display = "none";
  });

})();
