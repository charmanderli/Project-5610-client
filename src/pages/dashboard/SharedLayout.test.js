import SharedLayout from "./SharedLayout";
import { BigSidebar } from "../../components";
import NavLinks from "../../components/NavLinks";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import links from "../../utils/links";

describe("SharedLayout", () => {
  describe("Links and buttons", () => {
    it("nav links", async () => {
      render(<NavLinks />, { wrapper: BrowserRouter });
      const linksArray = screen.getAllByRole("NavLink");
      expect(linksArray).toHaveLength(5);
    });
  });
});
