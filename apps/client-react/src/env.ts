import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["development", "production", "test"]).default("development"),
  VITE_DATABASE_URL: z.string().url(),
});

export function getEnv() {
  try {
    // vite loads the right environment variables based on mode
    const env = envSchema.parse(import.meta.env);

    console.log(`Running in ${env.MODE} mode`);
    console.log(`Using API at: ${env.VITE_DATABASE_URL}`);

    return env;
  } catch (error) {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment configuration");
  }
}
