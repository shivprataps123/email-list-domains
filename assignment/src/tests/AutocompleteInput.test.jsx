import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AutocompleteInput from "../components/AutocompleteInput";

describe("AutocompleteInput", () => {
  const mockDomains = ["example.com", "test.com"];
  const mockRecipients = [
    { email: "user1@example.com", isSelected: false },
    { email: "user2@test.com", isSelected: false },
  ];

  test("renders input field", () => {
    render(
      <AutocompleteInput
        domains={mockDomains}
        recipients={mockRecipients}
        onAddRecipient={vi.fn()}
        onSelectDomain={vi.fn()}
      />
    );
    expect(
      screen.getByPlaceholderText("Add recipients or domains")
    ).toBeInTheDocument();
  });

  test("calls onAddRecipient when valid email is entered", async () => {
    const mockAdd = vi.fn();
    render(
      <AutocompleteInput
        domains={mockDomains}
        recipients={mockRecipients}
        onAddRecipient={mockAdd}
        onSelectDomain={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText("Add recipients or domains");
    await user.type(input, "new@email.com{enter}");

    expect(mockAdd).toHaveBeenCalledWith("new@email.com");
  });
});
