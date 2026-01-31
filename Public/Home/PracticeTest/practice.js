function selectCourse(){
  window.location.href = "#mainBorder";
}

const select = document.getElementById("NoQuestion");

  for (let i = 1; i <= 50; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }


// --------------------
// Floating menu logic
// --------------------
const btn = document.getElementById("floating-menu-btn");
const menu = document.getElementById("section1");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.style.display = "none";
    }
  });
}

// --------------------
// Icons
// --------------------
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
    img.className = "icon";
    container.appendChild(img);
  }
});

// --------------------
// Global variables
// --------------------
let extractedText = "";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// --------------------
// PDF Upload Handling
// --------------------
const input = document.getElementById("pdfInput");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");
const questionsDiv = document.getElementById("questions");

if (input && output) {
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

        const pageText = textContent.items.map(i => i.str).join(" ");
        const cleanText = pageText
          .replace(/\s+/g, " ")
          .replace(/-\s+/g, "")
          .trim();

        if (cleanText.toLowerCase().includes("references")) break;

        fullText += "\n\n" + cleanText;
      }

      extractedText = fullText;
      output.textContent = fullText;
    };

    reader.readAsArrayBuffer(file);
  });
}

// --------------------
// Helper: Chunking
// --------------------
function chunkText(text, maxLength = 2000) {
  const chunks = [];
  for (let i = 0; i < text.length; i += maxLength) {
    chunks.push(text.slice(i, i + maxLength));
  }
  return chunks;
}

// --------------------
// AI Backend
// --------------------
async function sendToAI(prompt) {
  const res = await fetch("https://spectre-9h2s.onrender.com/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  return (
    data.answer ||
    data.result ||
    data.choices?.[0]?.message?.content ||
    ""
  );
}

// --------------------
// Generate Questions
// --------------------
if (generateBtn && questionsDiv) {
  generateBtn.addEventListener("click", async () => {
    if (!extractedText) {
      alert("Upload a PDF first!");
      return;
    }

    questionsDiv.innerHTML = "Generating questions…<br><br>";

    const chunks = chunkText(extractedText, 2000);
    let allQuestions = "";

    for (let i = 0; i < chunks.length; i++) {
      questionsDiv.innerHTML += `<p>Processing part ${i + 1} of ${chunks.length}...</p>`;

      try {
        const response = await sendToAI(`
You are a helpful study assistant.
Generate 3 study questions from the text below.
Include answers after each question.

Text:
${chunks[i]}
        `);

        allQuestions += "\n" + response;
      } catch (err) {
        console.error("Chunk failed:", err);
        allQuestions += "\n[Skipped a section due to error]\n";
      }

      // yield to UI (prevents freezing)
      await new Promise(r => setTimeout(r, 50));
    }

    const lines = allQuestions.split(/\n+/).filter(Boolean);
    questionsDiv.innerHTML = lines.map(l => `<p>${l}</p>`).join("");
  });
}