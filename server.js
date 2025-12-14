import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

const OPENAI_KEY = "";

app.post("/chat", async (req, res) => {
  console.log("🔥 /chat HIT");

  try {
    const { messages } = req.body;

    // ✅ CRITICAL FIX: flatten conversation
    const prompt = messages
      .map(m => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: prompt
        })
      }
    );

    const data = await response.json();
    console.log("OPENAI RAW:", data);

    const text =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text;

    if (!text || !text.trim()) {
      return res.json({ ok: false, error: "Empty AI response" });
    }

    res.json({
      ok: true,
      reply: text.trim()
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.json({ ok: false, error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("✅ CheckRizz server running on http://localhost:3000");
});
