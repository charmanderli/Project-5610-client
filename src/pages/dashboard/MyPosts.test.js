import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import links from "../../utils/links";
import MyPosts from "./MyPosts";

describe("MyPosts", () => {
  describe("Links and buttons", () => {
    it("Read button", async () => {
      render(<MyPosts />, { wrapper: BrowserRouter });
      const readButton = screen.getByRole("Link", { name: "Read" });
      userEvent.click(readButton);
      await waitFor(() => {
        expect(
          screen.getByRole("Link", { name: "Go back" })
        ).toBeInTheDocument();
      });
    });
  });
});
