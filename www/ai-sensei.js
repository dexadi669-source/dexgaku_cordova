/* =========================================
   AI SENSEI LOGIC (ai-sensei.js)
========================================= */

const AI_SYSTEM_INSTRUCTION = `
Kamu adalah DeX Sensei, AI Sensei bahasa Jepang untuk aplikasi DeX Gaku.
Tugas utama kamu adalah membantu pengguna belajar bahasa Jepang, terutama level JLPT N5.
Gunakan bahasa Indonesia yang mudah dipahami dan santai.
Jika menjelaskan kosakata, tampilkan: Kanji/Kana, Romanji, Arti, Contoh.
Jika menjelaskan grammar, jelaskan: Arti, Fungsi, Pola, Contoh.
Format koreksi: ❌ Asli, ✅ Benar, Penjelasan.
Jangan memberikan jawaban langsung jika pengguna meminta kuis.
`;

let aiChatHistory = [];
const aiChatContainer = document.getElementById("aiChatContainer");
const aiUserInput = document.getElementById("aiUserInput");
const aiSendBtn = document.getElementById("aiSendBtn");

if (aiUserInput) {
  aiUserInput.classList.add("ignore-custom-keyboard"); 
  aiUserInput.setAttribute("inputmode", "text");
}

function aiResetChat() {
  if (aiChatHistory.length === 0) return;
  forceClearAiChat();
}

function forceClearAiChat() {
  if (window.speechSynthesis && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }

  aiChatHistory = [];
  
  const messages = aiChatContainer.querySelectorAll(".ai-message");
  messages.forEach(msg => msg.remove());
  
  if (aiUserInput) {
    aiUserInput.value = "";
    aiUserInput.style.height = "auto";
    aiUserInput.blur();
  }
}

function aiQuickQuestion(text) {
  aiUserInput.value = text;
  aiSendMessage();
}

function aiAddUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "ai-message user";
  msg.innerHTML = `<div class="ai-bubble">${text}</div>`;
  aiChatContainer.appendChild(msg);
  aiScrollToElement(msg); // Fokus ke pesan user yang baru dikirim
}

function aiSpeakText(text, btnElement) {
  if (!window.speechSynthesis) {
    alert("Fitur suara tidak didukung di perangkat ini.");
    return;
  }
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    btnElement.innerHTML = "🔊 Dengar";
    return;
  }

  const cleanText = text.replace(/[*#_]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'id-ID'; 
  
  utterance.onstart = () => {
    btnElement.innerHTML = "⏹️ Stop";
    btnElement.style.color = "#ef4444";
  };
  utterance.onend = () => {
    btnElement.innerHTML = "🔊 Dengar";
    btnElement.style.color = "#64748b";
  };
  utterance.onerror = () => {
    btnElement.innerHTML = "🔊 Dengar";
    btnElement.style.color = "#64748b";
  };

  speechSynthesis.speak(utterance);
}

// Menambah pesan AI (Dilengkapi Tombol Salin, Suara, dan Reload/Muat Ulang)
function aiAddMessage(text, originalQuestion = null, isError = false) {
  const msg = document.createElement("div");
  msg.className = isError ? "ai-message ai error" : "ai-message ai";
  
  let formattedText = text;
  if (!isError && typeof marked !== "undefined") {
    marked.setOptions({ breaks: true });
    formattedText = marked.parse(text);
  }

  const wrapper = document.createElement("div");
  wrapper.style.maxWidth = "85%";

  const bubble = document.createElement("div");
  bubble.className = "ai-bubble";
  bubble.innerHTML = formattedText;

  const btnGroup = document.createElement("div");
  btnGroup.style.display = "flex";
  btnGroup.style.gap = "12px";
  btnGroup.style.marginTop = "6px";
  btnGroup.style.marginLeft = "4px";

  if (!isError) {
    // Tombol Salin
    const copyBtn = document.createElement("button");
    copyBtn.className = "ai-action-btn";
    copyBtn.innerHTML = "📋 Salin";
    copyBtn.style.cssText = "background:none; border:none; color:#64748b; font-size:12px; font-weight:600; cursor:pointer;";
    copyBtn.onclick = function() {
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.innerHTML = "✅ Tersalin";
        copyBtn.style.color = "#22c55e";
        setTimeout(() => {
          copyBtn.innerHTML = "📋 Salin";
          copyBtn.style.color = "#64748b";
        }, 2000);
      });
    };

    // Tombol Suara
    const voiceBtn = document.createElement("button");
    voiceBtn.className = "ai-action-btn";
    voiceBtn.innerHTML = "🔊 Dengar";
    voiceBtn.style.cssText = "background:none; border:none; color:#64748b; font-size:12px; font-weight:600; cursor:pointer;";
    voiceBtn.onclick = function() { aiSpeakText(text, voiceBtn); };

    btnGroup.appendChild(copyBtn);
    btnGroup.appendChild(voiceBtn);
  } else if (originalQuestion) {
    // Tombol Muat Ulang (Reload) jika koneksi error
    const reloadBtn = document.createElement("button");
    reloadBtn.className = "ai-action-btn";
    reloadBtn.innerHTML = "🔄 Muat Ulang";
    reloadBtn.style.cssText = "background:none; border:none; color:#ef4444; font-size:12px; font-weight:700; cursor:pointer;";
    reloadBtn.onclick = function() {
      // Hapus pesan error ini dari chat
      msg.remove();
      // Hapus riwayat "user" terakhir yang gagal agar tidak menumpuk duplikat di history
      if (aiChatHistory.length > 0 && aiChatHistory[aiChatHistory.length - 1].role === "user") {
        aiChatHistory.pop();
      }
      // Kirim ulang pertanyaan secara otomatis
      aiingestAndSend(originalQuestion);
    };
    btnGroup.appendChild(reloadBtn);
  }

  wrapper.appendChild(bubble);
  wrapper.appendChild(btnGroup);

  msg.innerHTML = `
    <img src="assets/ai/ai_logo.png" class="ai-avatar-chat" onerror="this.src='assets/logo-shiba.svg'">
  `;
  msg.appendChild(wrapper);

  aiChatContainer.appendChild(msg);
  
  // Mengarahkan scroll agar pas di awal jawaban AI (bukan di bawah mentok)
  aiScrollToElement(msg);
}

function aiCreateLoading() {
  const msg = document.createElement("div");
  msg.className = "ai-message ai";
  msg.id = "aiLoadingMsg";
  msg.innerHTML = `
    <img src="assets/ai/ai_logo.png" class="ai-avatar-chat" onerror="this.src='assets/logo-shiba.svg'">
    <div class="ai-loading"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></div>
  `;
  aiChatContainer.appendChild(msg);
  aiScrollToElement(msg);
}

function aiRemoveLoading() {
  const loading = document.getElementById("aiLoadingMsg");
  if (loading) loading.remove();
}

// Fungsi pengguliran cerdas (fokus ke bagian atas elemen baru, bukan paling bawah)
function aiScrollToElement(element) {
  setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

async function aiSendMessage() {
  const text = aiUserInput.value.trim();
  if (!text) return;

  aiUserInput.value = "";
  aiUserInput.style.height = "auto";
  aiUserInput.blur(); // Menutup keyboard HP

  aiingestAndSend(text);
}

async function aiingestAndSend(text) {
  aiSendBtn.disabled = true;

  aiAddUserMessage(text);
  aiChatHistory.push({ role: "user", parts: [{ text: text }] });
  aiCreateLoading();

  try {
    const url = "https://aidexgaku.dexadi669.workers.dev/";
    const requestBody = {
      systemInstruction: { parts: [{ text: AI_SYSTEM_INSTRUCTION }] },
      contents: aiChatHistory,
      generationConfig: { temperature: 0.4, maxOutputTokens: 2000 }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    if (!response.ok) throw new Error("HTTP Error");

    const aiText = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("").trim();
    aiChatHistory.push({ role: "model", parts: [{ text: aiText }] });
    
    aiRemoveLoading();
    aiAddMessage(aiText);
  } catch (error) {
    aiRemoveLoading();
    // Kirim teks pertanyaan asli ke fungsi pesan error agar tombol muat ulang bisa menggunakannya
    aiAddMessage("Maaf, koneksi terputus atau terjadi kesalahan jaringan.", text, true);
  }
  
  aiSendBtn.disabled = false;
}

// Auto resize & Enter key
if(aiUserInput) {
    aiUserInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { 
        e.preventDefault(); 
        aiSendMessage(); 
      }
    });
    aiUserInput.addEventListener("input", function() {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 110) + "px";
    });
}

/* =========================================
   DETEKSI KONEKSI INTERNET (ONLINE / OFFLINE)
========================================= */
function updateOnlineStatus() {
  const statusText = document.getElementById("aiStatusText");
  const statusDot = document.getElementById("aiStatusDot");
  
  if (!statusText || !statusDot) return;

  if (navigator.onLine) {
    statusText.textContent = "Online";
    statusText.style.color = "#22c55e"; // Hijau
    statusDot.style.backgroundColor = "#22c55e";
  } else {
    statusText.textContent = "Offline";
    statusText.style.color = "#ef4444"; // Merah
    statusDot.style.backgroundColor = "#ef4444";
  }
}

// Pantau perubahan saat internet dinyalakan atau dimatikan
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Jalankan saat halaman pertama kali dibuka
document.addEventListener("DOMContentLoaded", updateOnlineStatus);
