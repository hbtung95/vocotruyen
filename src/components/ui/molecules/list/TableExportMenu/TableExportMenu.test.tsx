import { render, screen, fireEvent } from "@testing-library/react";
import TableExportMenu from "./TableExportMenu";

describe("TableExportMenu", () => {
  it("renders export button", () => {
    render(<TableExportMenu onExport={jest.fn()} />);
    expect(screen.getByText("Xuất file")).toBeInTheDocument();
  });

  it("opens menu and calls onExport", () => {
    const fn = jest.fn();
    render(<TableExportMenu onExport={fn} />);
    fireEvent.click(screen.getByText("Xuất file"));
    fireEvent.click(screen.getByText("CSV (.csv)"));
    expect(fn).toHaveBeenCalledWith("csv", undefined);
  });

  it("checkbox works withSelection", () => {
    const fn = jest.fn();
    render(<TableExportMenu onExport={fn} withSelection />);
    fireEvent.click(screen.getByText("Xuất file"));
    fireEvent.click(screen.getByLabelText("Chỉ xuất dòng đã chọn"));
    fireEvent.click(screen.getByText("Excel (.xlsx)"));
    expect(fn).toHaveBeenCalledWith("xlsx", { selected: true });
  });

  it("disabled disables button", () => {
    render(<TableExportMenu onExport={jest.fn()} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
