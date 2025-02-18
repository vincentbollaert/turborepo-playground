import helmet from "helmet";
import { Express } from "express";

export function applySecurityMiddlewares(app: Express) {
  app.use(helmet());
}
