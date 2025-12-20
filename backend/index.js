import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import contactRoutes from "./routes/contact.js";



dotenv.config();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL, // your Vercel URL here
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (Postman/curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(new Error("Not allowed by CORS: " + origin));
  }
}));
app.options("*", cors());

app.use(express.json());
app.use("/api/contact", contactRoutes);

/* ROOT TEST */
app.get("/", (req, res) => {
  res.send("API OK ✅");
});

/* DB TEST */
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB connection failed" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
