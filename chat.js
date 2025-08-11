const botaoChat = document.getElementById("botaoChat");
const painelChat = document.getElementById("painelChat");
const fecharChat = document.getElementById("fecharChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// URL do backend no Vercel
const API_URL = "https://chat-diamante-11fgpkhk2-albert-nunes-diass-projects.vercel.app/";

botaoChat.addEventListener("click", () => {
  painelChat.style.display = "flex";
});

fecharChat.addEventListener("click", () => {
  painelChat.style.display = "none";
});

function addMessage(content, sender) {
  const div = document.createElement("div");
  div.className = sender === "user" ? "user-message" : "bot-message";
  div.textContent = content;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage(message) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
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
  addMessage("Digitando...", "bot");

  const reply = await sendMessage(message);

  const typingMsg = chatMessages.querySelector(".bot-message:last-child");
  if (typingMsg && typingMsg.textContent === "Digitando...") {
    typingMsg.remove();
  }

  addMessage(reply, "bot");
});

