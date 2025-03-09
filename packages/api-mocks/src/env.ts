import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export function getEnv() {
  try {
    const envWithFallback = typeof process !== "undefined" ? process.env : {};
    return envSchema.parse(envWithFallback);
  } catch (error) {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment configuration");
  }
}
