import AddPost from "./AddPost";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import useAuth0 from "@auth0/auth0-react";

describe("AddPost", () => {
  describe("Adding a post", () => {
    const mockedUseAuth0 = jest.Mock(useAuth0);

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user: { email: "abc@abc.ca", sub: "google-oauth2|12345678901234" },
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
    it("title input changes as user types", async () => {
      render(<AddPost />, { wrapper: BrowserRouter });
      const titleInput = screen.getByLabelText("title");
      expect(titleInput).toBeInTheDocument();
      await userEvent.type(titleInput, "test title");
      expect(titleInput).toHaveValue("test title");
    });
  });
});
