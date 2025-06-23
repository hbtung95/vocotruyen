import { render, screen, fireEvent } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell", () => {
  it("renders text in td by default", () => {
    render(<table><tbody><tr><TableCell>Test</TableCell></tr></tbody></table>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders as th when header", () => {
    render(<table><thead><tr><TableCell header>Header</TableCell></tr></thead></table>);
    expect(screen.getByText("Header").tagName).toBe("TH");
  });

  it("shows sort icon when sortable", () => {
    render(<table><thead><tr><TableCell header sortable>Col</TableCell></tr></thead></table>);
    expect(screen.getByText("⇅")).toBeInTheDocument();
  });

  it("shows sorted arrow", () => {
    render(<table><thead><tr><TableCell header sortable sorted sortDirection="desc">Col</TableCell></tr></thead></table>);
    expect(screen.getByText("▼")).toBeInTheDocument();
  });

  it("applies align, variant, size", () => {
    render(<table><tbody><tr>
      <TableCell align="center" variant="number" size="lg">100</TableCell>
    </tr></tbody></table>);
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
