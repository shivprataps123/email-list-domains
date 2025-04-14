import { describe, test, expect, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

// Mock matchMedia for Ant Design
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        media: "",
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      };
    };
});

describe("App Component", () => {
  test("renders inside root div", () => {
    // Create a root element
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    // Render the app
    render(<App />, { container: root });

    // Verify the root contains content
    expect(root.innerHTML).not.toBe("");
    expect(root.textContent).toContain("Email Recipient Manager"); // Adjust to match actual text

    // Clean up
    document.body.removeChild(root);
  });
});
