import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "Trūksta laukų" });

    const exists = await pool.query("SELECT id FROM users WHERE email=$1", [email]);
    if (exists.rows.length) return res.status(409).json({ error: "El. paštas jau naudojamas" });

    const hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES ($1,$2,$3,'admin')
       RETURNING id, name, email, role`,
      [name, email, hash]
    );

    res.status(201).json({ success: true, user: result.rows[0] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Serverio klaida" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Trūksta laukų" });

    const result = await pool.query(
      "SELECT id, name, email, password_hash, role FROM users WHERE email=$1",
      [email]
    );

    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: "Neteisingi prisijungimo duomenys" });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Neteisingi prisijungimo duomenys" });

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Serverio klaida" });
  }
});

export default router;
