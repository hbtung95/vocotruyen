import { render, screen, fireEvent } from "@testing-library/react";
import TableImportMenu from "./TableImportMenu";

describe("TableImportMenu", () => {
  it("renders import button", () => {
    render(<TableImportMenu onImport={jest.fn()} />);
    expect(screen.getByText("Nhập file")).toBeInTheDocument();
  });

  it("opens popup, accepts file, calls onImport", () => {
    const fn = jest.fn();
    render(<TableImportMenu onImport={fn} />);
    fireEvent.click(screen.getByText("Nhập file"));
    const file = new File(["abc"], "test.csv", { type: "text/csv" });
    const input = screen.getByLabelText("Kéo thả hoặc chọn file");
    fireEvent.change(input.querySelector('input[type="file"]')!, { target: { files: [file] } });
    fireEvent.click(screen.getByText("Nhập dữ liệu"));
    expect(fn).toHaveBeenCalledWith(file, "csv");
  });

  it("calls onDownloadDemo if provided", () => {
    const fn = jest.fn();
    render(<TableImportMenu onImport={jest.fn()} onDownloadDemo={fn} />);
    fireEvent.click(screen.getByText("Nhập file"));
    fireEvent.click(screen.getByText("Tải file mẫu (CSV)"));
    expect(fn).toHaveBeenCalledWith("csv");
  });
});
