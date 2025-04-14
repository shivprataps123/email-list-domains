import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

// Run cleanup after each test
afterEach(() => {
  cleanup();
});
