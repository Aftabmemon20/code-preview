import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { language, code } = req.body;
  if (!language || !code) {
    return res.status(400).json({ error: "Language and code are required" });
  }
  res.json({ preview: `You wrote ${language} code:\n\n${code}` });
});

export default router;