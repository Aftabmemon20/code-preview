import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/token", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Username required" });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ access_token: token, token_type: "Bearer" });
});

export default router;