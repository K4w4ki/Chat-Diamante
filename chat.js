const botaoChat = document.getElementById("botaoChat");
const painelChat = document.getElementById("painelChat");
const fecharChat = document.getElementById("fecharChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// URL do backend no Vercel
const API_URL = "https://chat-diamante.vercel.app/api/chat";

botaoChat.addEventListener("click", () => {
  painelChat.style.display = "flex";
});

fecharChat.addEventListener("click", () => {
  painelChat.style.display = "none";
});

function addMessage(content, sender) {
  const wrapper = document.createElement("div");
  wrapper.className = sender === "user" ? "message-row user" : "message-row bot";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "user" ? "👩🏽‍🌾" : "🤠"; // pode ser emoji ou imagem

  const bubble = document.createElement("div");
  bubble.className = sender === "user" ? "user-message" : "bot-message";
  bubble.textContent = content;

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function typeMessage(content, sender, speed = 25) {
  const div = document.createElement("div");
  div.className = sender === "user" ? "user-message" : "bot-message";
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  let i = 0;
  const interval = setInterval(() => {
    div.textContent += content.charAt(i);
    i++;
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (i >= content.length) clearInterval(interval);
  }, speed);
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

   typeMessage(reply, "bot", 20); // 20 milissegundos por caractere

chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault(); // impede quebra de linha
    chatForm.dispatchEvent(new Event("submit", { cancelable: true }));
  }
});
 
});
