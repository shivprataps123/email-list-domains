import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import RecipientGroup from "../components/RecipientGroup";

describe("RecipientGroup", () => {
  const mockRecipients = [
    { email: "user1@example.com", isSelected: true },
    { email: "user2@example.com", isSelected: true },
  ];

  test("calls onRemoveDomain when remove all clicked", async () => {
    const mockRemove = vi.fn();
    render(
      <RecipientGroup
        domain="example.com"
        recipients={mockRecipients}
        onToggleRecipient={vi.fn()}
        onRemoveRecipient={vi.fn()}
        onRemoveDomain={mockRemove}
      />
    );

    await user.click(screen.getByText("Remove all"));
    expect(mockRemove).toHaveBeenCalledWith("example.com");
  });
});
