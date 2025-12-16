import express from "express";
import pool from "../db.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.json({ ok: true, message: "Contact route is working. Use POST to submit form." });
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Trūksta laukų: vardas, el. paštas, žinutė." });
    }

    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, phone, message, created_at`,
      [name, email, phone || null, message]
    );

    res.status(201).json({ success: true, contact: result.rows[0] });
  } catch (err) {
    console.error("CONTACT POST error:", err);
    res.status(500).json({ error: "Serverio klaida" });
  }
});

export default router;
