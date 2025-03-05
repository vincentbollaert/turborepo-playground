import './env.js'
import express, { Request, Response } from 'express'
import cors from 'cors'
import { neon } from '@neondatabase/serverless'
import { applySecurityMiddlewares } from './middlewares/security.js'
import featureRoutes from './routes/features.js'
import { config } from './config.js'

export const app = express()
const sql = neon(config.dbPath)

app.use(cors())
applySecurityMiddlewares(app)

app.use('/api/v1/features', featureRoutes)

app.get('/api/v1/db-version', async (_req: Request, res: Response) => {
  try {
    const result = await sql`SELECT version()`
    const { version } = result[0] as { version: string }
    res.json({ version })
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Failed to fetch database version' })
  }
})

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`)
})
