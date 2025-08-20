const botaoChat = document.getElementById("botaoChat");
const painelChat = document.getElementById("painelChat");
const fecharChat = document.getElementById("fecharChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// URL do backend no Vercel
const API_URL = "https://chat-diamante.vercel.app/api/chat";

// Cria ou recupera um sessionId
let sessionId = localStorage.getItem("sessionId");
if (!sessionId) {
  sessionId = crypto.randomUUID();
  localStorage.setItem("sessionId", sessionId);
}

botaoChat.addEventListener("click", () => {
  painelChat.style.display = "flex";
});

fecharChat.addEventListener("click", () => {
  painelChat.style.display = "none";
});

// Função que adiciona botões de copiar aos blocos de código
function addCopyButtons(container) {
  container.querySelectorAll('pre').forEach((block) => {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = '📋 Copiar';
    copyBtn.className = 'copy-code-btn';

    copyBtn.addEventListener('click', () => {
      const codeText = block.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        copyBtn.textContent = '✅ Copiado!';
        setTimeout(() => copyBtn.textContent = '📋 Copiar', 1500);
      });
    });

    block.style.position = 'relative';
    block.appendChild(copyBtn);
  });
}

function addMessage(content, sender) {
  const wrapper = document.createElement("div");
  wrapper.className = sender === "user" ? "message-row user" : "message-row bot";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "user" ? "👩🏽‍🌾" : "🤠";

  const bubble = document.createElement("div");
  bubble.className = sender === "user" ? "user-message" : "bot-message";

  if (sender === "bot") {
    bubble.innerHTML = marked.parse(content);
    addCopyButtons(bubble);
  } else {
    bubble.textContent = content;
  }

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing";

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("span");
    typingDiv.appendChild(dot);
  }

  const wrapper = document.createElement("div");
  wrapper.className = "message-row bot";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "🤠"; // ícone do bot

  wrapper.appendChild(avatar);
  wrapper.appendChild(typingDiv);
  chatMessages.appendChild(wrapper);

  // Scroll suave até o final
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
}

function typeMessage(content, sender, speed = 300) {
  const wrapper = document.createElement("div");
  wrapper.className = sender === "user" ? "message-row user" : "message-row bot";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "user" ? "👩🏽‍🌾" : "🤠";

  const bubble = document.createElement("div");
  bubble.className = sender === "user" ? "user-message" : "bot-message";

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });

  if (sender === "bot") {
    const words = content.split(/(\s+)/); // Divide mantendo espaços para preservar formatação
    let i = 0;

    const interval = setInterval(() => {
      const partialText = words.slice(0, i + 1).join('');
      bubble.innerHTML = marked.parse(partialText);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      i++;
      if (i >= words.length) {
        clearInterval(interval);
      }
    }, speed);
  } else {
    bubble.textContent = content;
  }
}

async function sendMessage(message) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }) // ENVIA sessionId
    });

    const data = await res.json();
    return data.reply || "Erro na resposta.";
  } catch {
    return "Erro ao se conectar ao servidor.";
  }
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  chatInput.value = "";
  showTypingIndicator();

  const reply = await sendMessage(message);

  // Remove o indicador de digitação
  const typingIndicator = chatMessages.querySelector(".typing");
  if (typingIndicator) typingIndicator.parentElement.remove();

  typeMessage(reply, "bot", 20);
});

// Enter para enviar (Shift+Enter = nova linha)
chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatForm.dispatchEvent(new Event("submit", { cancelable: true }));
  }
});
