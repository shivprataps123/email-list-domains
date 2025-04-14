import { describe, test, expect } from "vitest";
import { validateEmail, extractDomain } from "../utils/emailUtils";

describe("Email Utils", () => {
  test("validateEmail returns true for valid emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  test("extractDomain gets domain from email", () => {
    expect(extractDomain("user@domain.com")).toBe("domain.com");
  });
});
