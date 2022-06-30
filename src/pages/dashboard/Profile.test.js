import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import links from "../../utils/links";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

describe("Profile", () => {
  describe("Links and buttons", () => {
    const mockedUseAuth0 = jest.Mock(useAuth0);

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user: { email: "abc@abc.ca", sub: "google-oauth2|12345678901234" },
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });

    it("Edit button", async () => {
      render(<Profile />, { wrapper: BrowserRouter });
      const editButton = screen.getByRole("Link", { name: "Edit" });
      userEvent.click(editButton);
      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: "Submit" })
        ).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(
          screen.getByRole("input", { name: "UserId" })
        ).toBeInTheDocument();
      });
    });
  });
});
