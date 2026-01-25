const btn = document.getElementById("floating-menu-btn");
const menu = document.getElementById("section1");

btn.addEventListener("click", () => {
    menu.style.display =
        menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = "none";
    }
});

 const iconMap = {
  dropdown: "../Icons/menu.svg",
  home: "../Icons/layout-dashboard.svg",
  tutorial: "../Icons/square-play.svg",
  study: "../Icons/book-open.svg",
  test: "../Icons/book-text.svg",
  notes: "../Icons/book.svg",
  assistant: "../Icons/sparkles.svg",
  calculator: "../Icons/calculator.svg",
  notification: "../Icons/bell.svg",
  settings: "../Icons/settings.svg",
};

document.querySelectorAll(".icon-container").forEach(container => {
  const iconName = container.dataset.icon;

  if (iconMap[iconName]) {
    const img = document.createElement("img");
    img.src = iconMap[iconName];
    img.classList.add("icon");
    container.appendChild(img);
  }
});


// --------------------
// Global variables
// --------------------
let extractedText = "";  // will store the PDF text globally

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// --------------------
// PDF Upload Handling
// --------------------
const input = document.getElementById("pdfInput");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");
const questionsDiv = document.getElementById("questions");

input.addEventListener("change", async () => {
  const file = input.files[0];
  if (!file) return;

  output.textContent = "Reading PDF...";

  const reader = new FileReader();

  reader.onload = async function () {
    const typedArray = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument(typedArray).promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .map(item => item.str)
        .join(" ");

      // Clean the text
      const cleanText = pageText
        .replace(/\s+/g, " ")
        .replace(/-\s+/g, "")
        .trim();

      fullText += "\n\n" + cleanText;
    }

    // ✅ Store globally for AI
    extractedText = fullText;

    // ✅ Show PDF text to user
    output.textContent = fullText;
  };

  reader.readAsArrayBuffer(file);
});

// --------------------
// Helper: Send prompt to your AI backend
// --------------------
async function sendToAI(prompt) {
  try {
    const res = await fetch("https://spectre-9h2s.onrender.com/api/openai", { // your backend URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    console.log("Backend response:", data); // 🔹 Debug log

    // Support multiple possible response formats
    return data.answer || data.result || data.choices?.[0]?.message?.content || "No answer returned";

  } catch (err) {
    console.error("Error fetching AI response:", err);
    throw err;
  }
}

// --------------------
// Generate Questions Button with Automatic Retry
// --------------------
generateBtn.addEventListener("click", async () => {
  if (!extractedText) {
    alert("Upload a PDF first!");
    return;
  }

  questionsDiv.textContent = "Sending request to backend…";

  let aiResponse = "";
  let attempts = 0;
  const maxAttempts = 10; // retry up to 10 times
  const delay = 5000; // 5 seconds between retries

  while (attempts < maxAttempts) {
    try {
      aiResponse = await sendToAI(`
You are a helpful study assistant.
Generate 5 study questions from the following text.
Include the answers after each question.

Text:
${extractedText}
      `);
      break; // success
    } catch (err) {
      attempts++;
      console.log(`Attempt ${attempts} failed, retrying in ${delay/1000}s...`);
      questionsDiv.textContent = `Backend may be sleeping or slow… waiting ${delay/1000} seconds. Attempt ${attempts} of ${maxAttempts}`;
      await new Promise(res => setTimeout(res, delay));
    }
  }

  if (!aiResponse) {
    questionsDiv.textContent = "Backend still unreachable after multiple attempts. Please try again later.";
    return;
  }

  // Split the AI response into lines and show each line separately
const lines = aiResponse.split(/\n+/).filter(line => line.trim() !== "");
questionsDiv.innerHTML = lines.map(line => `<p>${line}</p>`).join("");
});