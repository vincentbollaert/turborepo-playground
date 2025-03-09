import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();
dotenv.config({ path: ".env.local", override: true });

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z
    .string()
    .transform((value) => parseInt(value, 10))
    .default("3000"),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
