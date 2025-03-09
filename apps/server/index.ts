import cors from "cors";
import express from "express";
import { env } from "./src/env";
import { applySecurityMiddlewares } from "./src/middlewares/security";
import featureRoutes from "./src/routes/features";

const app = express();

app.use(cors());
applySecurityMiddlewares(app);

app.use("/api/v1/features", featureRoutes);

if (env.NODE_ENV !== "production") {
  app.listen(env.PORT, () => {
    console.log(`Server running at http://localhost:${env.PORT}`);
  });
}

export default app;
