import { Endpoints } from "@repo/api/apiTypes";

export type FeaturesResponse = Endpoints["Features"]["GetFeatures"]["Response"];

export const defaultFeatures: FeaturesResponse = {
  features: [
    {
      id: crypto.randomUUID(),
      name: "Multi-framework frontend applications",
      description: "Next.js and Vite/React apps with shared dependencies",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Express server",
      description:
        "Express server with structured routing, middleware layers, and shared API types",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Hierarchical component library system",
      description:
        "Radix UI components in Primitives > Components > Patterns > Templates structure with SCSS modules",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Multi-level CSS design tokens",
      description:
        "CSS variables following core > semantic > component hierarchy for consistent theming",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Contract-first API development",
      description:
        "OpenAPI schemas with type-safe client generation and MSW for consistent mock handling",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Shared development configurations",
      description: "Common TypeScript, ESLint, and testing configs",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Dependency version management",
      description:
        "Syncpack for consistent package versions and preventing dependency conflicts across apps",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Serverless database integration",
      description: "Simple Neon PostgreSQL database intergration",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      name: "Intergration tests",
      description:
        "Vitest and RTL intergration tests with layered render functions and shared test utilities",
      status: "done",
    },
  ],
};

export const emptyFeatures: FeaturesResponse = {
  features: [],
};
