import { render, screen } from "@testing-library/react";
import SelectedRecipients from "../components/SelectedRecipients";

describe("SelectedRecipients", () => {
  const mockGroupedRecipients = {
    "example.com": [
      { email: "user1@example.com", isSelected: true },
      { email: "user2@example.com", isSelected: true },
    ],
    "test.com": [{ email: "user@test.com", isSelected: true }],
  };

  test("shows message when no recipients selected", () => {
    render(
      <SelectedRecipients
        groupedRecipients={{}}
        onToggleRecipient={vi.fn()}
        onRemoveRecipient={vi.fn()}
        onRemoveDomain={vi.fn()}
      />
    );

    expect(screen.getByText("No recipients selected")).toBeInTheDocument();
  });
});
