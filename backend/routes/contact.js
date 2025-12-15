import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  await pool.query(
    "INSERT INTO contacts (name, email, phone, message) VALUES ($1,$2,$3,$4)",
    [name, email, phone, message]
  );

  res.json({ success: true });
});

export default router;
