import { setupWorker } from "msw/browser";
import { getFeaturesHandlers } from "./handlers/features/getFeatures";

export const browserWorker = setupWorker(getFeaturesHandlers.defaultHandler());
