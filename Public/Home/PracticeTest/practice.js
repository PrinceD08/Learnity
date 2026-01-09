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
  // Replace this URL with your AI backend endpoint
  const res = await fetch("https://spectre-9h2s.onrender.com/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();

  // Adjust this depending on how your backend responds
  return data.answer; // or data.choices[0].message.content
}

// --------------------
// Generate Questions Button
// --------------------
generateBtn.addEventListener("click", async () => {
  if (!extractedText) {
    alert("Upload a PDF first!");
    return;
  }

  questionsDiv.textContent = "Generating questions...";

  const prompt = `
You are a helpful study assistant.
Generate 5 study questions from the following text.
Include the answers after each question.

Text:
${extractedText}
  `;

  try {
    const aiResponse = await sendToAI(prompt);

    // Display AI output
    questionsDiv.textContent = aiResponse;
  } catch (err) {
    console.error(err);
    questionsDiv.textContent = "Error generating questions.";
  }
});