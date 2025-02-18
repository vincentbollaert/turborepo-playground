import express from 'express';
import { Pool } from 'pg';
import { config } from '../config.js';

const pool = new Pool({
  connectionString: config.dbPath,
  ssl: {
    rejectUnauthorized: false // Required for Neon's SSL connection
  }
});

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = 'SELECT id, name, description, status FROM features';
    const { rows } = await pool.query(query);

    res.send(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send({ error: 'Failed to fetch features' });
  }
});

export default router;
