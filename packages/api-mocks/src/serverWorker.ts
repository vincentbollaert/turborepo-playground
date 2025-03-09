import { setupServer } from "msw/node";
import { getFeaturesHandlers } from "./handlers/features/getFeatures";

export const serverWorker = setupServer(getFeaturesHandlers.defaultHandler());
