import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({ origin: "*" })); // allow all origins
app.use(express.json());        // parse JSON bodies

// Chat endpoint
app.post("/api/openai", async (req, res) => {
  console.log("BODY RECEIVED:", req.body); // debug line
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is missing" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));