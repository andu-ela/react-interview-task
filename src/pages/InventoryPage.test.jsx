import { render, screen, fireEvent } from "@testing-library/react";
import InventoryPage from "./InventoryPage";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("InventoryPage", () => {
  it("displays the correct content when a category is clicked", () => {
    render(
      <MemoryRouter>
        <InventoryPage />
      </MemoryRouter>
    );

    const scaffoldButton = screen.getByText("Scaffold");
    fireEvent.click(scaffoldButton);

    expect(screen.getByText("S26907")).toBeInTheDocument();
  });
});
