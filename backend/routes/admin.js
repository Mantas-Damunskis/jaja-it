import express from "express";
import pool from "../db.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

/* GET all contacts */
router.get("/contacts", requireAuth, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, phone, message, created_at FROM contacts ORDER BY created_at DESC"
    );
    res.json({ contacts: result.rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

/* DELETE contact by id */
router.delete("/contacts/:id", requireAuth, requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    await pool.query("DELETE FROM contacts WHERE id = $1", [id]);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

export default router;
