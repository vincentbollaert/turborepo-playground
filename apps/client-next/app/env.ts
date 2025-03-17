import { z } from "zod";

const clientSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

export function getClientEnv() {
  try {
    // In Next, process.env is available in both server and client components,
    // but only NEXT_PUBLIC_ variables are accessible in client components
    const clientEnv = {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NODE_ENV: process.env.NODE_ENV,
    };

    return clientSchema.parse(clientEnv);
  } catch (error) {
    console.error("❌ Invalid client environment variables:", error);
    throw new Error("Invalid client environment configuration");
  }
}
