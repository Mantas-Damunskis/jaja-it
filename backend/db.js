import pkg from "pg";
const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ DATABASE_URL is missing in environment variables");
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }, // ✅ important for Render Postgres
});

export default pool;
