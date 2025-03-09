import { z } from "zod";

const clientSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  NEXT_PUBLIC_APP_VERSION: z.string().default("0.1.0"),
});

export function getClientEnv() {
  try {
    // In Next, process.env is available in both server and client components,
    // but only NEXT_PUBLIC_ variables are accessible in client components
    return clientSchema.parse(process.env);
  } catch (error) {
    console.error("❌ Invalid client environment variables:", error);
    throw new Error("Invalid client environment configuration");
  }
}
