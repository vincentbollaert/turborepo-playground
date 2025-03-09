import { Endpoints } from "@repo/api/apiTypes";
import express, { Response } from "express";
import { Pool } from "pg";
import { env } from "../env";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon's SSL connection
  },
});

const router = express.Router();

router.get("/", async (_, res: Response<Endpoints["Features"]["GetFeatures"]["Response"]>) => {
  try {
    const query = "SELECT id, name, description, status FROM features";
    const { rows } = await pool.query(query);

    res.send({ features: rows });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send({ features: [] });
  }
});

export default router;
