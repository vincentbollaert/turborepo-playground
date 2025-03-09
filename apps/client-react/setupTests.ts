import "@testing-library/jest-dom";

import { serverWorker } from "@repo/api-mocks/serverWorker";
import { client } from "@repo/api/apiClient";
import { testQueryClient } from "@repo/vitest-config/testUtils";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => {
  client.setConfig({
    baseUrl: "http://localhost:5173/api/v1",
  });
  serverWorker.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  serverWorker.resetHandlers();
  testQueryClient.clear();
});

afterAll(() => {
  serverWorker.close();
});
