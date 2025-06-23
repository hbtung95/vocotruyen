import { render, screen, fireEvent } from "@testing-library/react";
import DataTableRow from "./DataTableRow";

const sampleCells = [
  { key: "name", content: "Nguyễn Văn A" },
  { key: "score", content: 8.7, align: "right" },
];

describe("DataTableRow", () => {
  it("renders cells", () => {
    render(<table><tbody><DataTableRow cells={sampleCells} /></tbody></table>);
    expect(screen.getByText("Nguyễn Văn A")).toBeInTheDocument();
    expect(screen.getByText("8.7")).toBeInTheDocument();
  });

  it("calls onCheck when checkbox clicked", () => {
    const mockFn = jest.fn();
    render(<table><tbody><DataTableRow cells={sampleCells} onCheck={mockFn} /></tbody></table>);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it("calls onRowClick when row is clicked", () => {
    const mockFn = jest.fn();
    render(<table><tbody><DataTableRow cells={sampleCells} onRowClick={mockFn} /></tbody></table>);
    fireEvent.click(screen.getByText("Nguyễn Văn A").closest("tr")!);
    expect(mockFn).toHaveBeenCalled();
  });
});
