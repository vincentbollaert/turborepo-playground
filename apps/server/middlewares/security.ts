import { Express } from "express";
import helmet from "helmet";

export function applySecurityMiddlewares(app: Express) {
  app.use(helmet());
}
