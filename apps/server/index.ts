import cors from "cors";
import express from "express";
import { env } from "./env";
import { applySecurityMiddlewares } from "./middlewares/security";
import featureRoutes from "./routes/features";

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
