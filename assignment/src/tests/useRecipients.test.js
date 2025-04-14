import { renderHook, act } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useRecipients } from "../hooks/useRecipients";

describe("useRecipients", () => {
  test("initializes with sample data", () => {
    const { result } = renderHook(() => useRecipients());

    expect(result.current.recipients.length).toBeGreaterThan(0);
    expect(result.current.availableDomains.length).toBeGreaterThan(0);
  });

  test("toggles recipient selection", () => {
    const { result } = renderHook(() => useRecipients());
    const testEmail = result.current.recipients[0].email;

    act(() => {
      result.current.toggleRecipientSelection(testEmail);
    });

    expect(
      result.current.recipients.find((r) => r.email === testEmail)?.isSelected
    ).toBe(true);
  });

  test("adds new valid recipient", () => {
    const { result } = renderHook(() => useRecipients());
    const newEmail = "new@example.com";

    act(() => {
      result.current.addNewRecipient(newEmail);
    });

    expect(result.current.recipients.some((r) => r.email === newEmail)).toBe(
      true
    );
  });

  test("rejects invalid email format", () => {
    const { result } = renderHook(() => useRecipients());
    const invalidEmail = "not-an-email";

    act(() => {
      const success = result.current.addNewRecipient(invalidEmail);
      expect(success).toBe(false);
    });

    expect(
      result.current.recipients.some((r) => r.email === invalidEmail)
    ).toBe(false);
  });
});
