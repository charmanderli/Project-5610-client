import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import links from "../../utils/links";
import Search from "./Search";

describe("Search", () => {
  describe("Links and buttons", () => {
    it("Read button", async () => {
      render(<Search />, { wrapper: BrowserRouter });
      const locationInput = screen.getByLabelText("Search Posts by Location");
      expect(locationInput).toBeInTheDocument();
      await userEvent.type(locationInput, "test");
      expect(locationInput).toHaveValue("test");
    });
  });
});
