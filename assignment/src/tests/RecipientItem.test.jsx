import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import RecipientItem from "../components/RecipientItem";

describe("RecipientItem", () => {
  test("renders email correctly", () => {
    render(
      <RecipientItem
        email="test@example.com"
        isSelected={false}
        onToggle={vi.fn()}
        onRemove={vi.fn()}
      />
    );
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });

  test("toggles selection when clicked", async () => {
    const mockToggle = vi.fn();
    render(
      <RecipientItem
        email="test@example.com"
        isSelected={false}
        onToggle={mockToggle}
        onRemove={vi.fn()}
      />
    );

    await user.click(screen.getByText("test@example.com"));
    expect(mockToggle).toHaveBeenCalledWith("test@example.com");
  });

  test("shows remove button when selected", () => {
    render(
      <RecipientItem
        email="test@example.com"
        isSelected={true}
        onToggle={vi.fn()}
        onRemove={vi.fn()}
      />
    );
    expect(screen.getByRole("button", { name: "×" })).toBeInTheDocument();
  });
});
