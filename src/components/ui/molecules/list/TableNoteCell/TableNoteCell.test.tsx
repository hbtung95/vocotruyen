import { render, screen, fireEvent } from "@testing-library/react";
import TableNoteCell from "./TableNoteCell";

describe("TableNoteCell", () => {
  it("renders note and label", () => {
    render(<TableNoteCell note="Nội dung ghi chú" label="Lưu ý" />);
    expect(screen.getByText("Nội dung ghi chú")).toBeInTheDocument();
    expect(screen.getByText("Lưu ý")).toBeInTheDocument();
  });

  it("renders markdown", () => {
    render(<TableNoteCell note="**Ghi chú đậm**" markdown />);
    expect(screen.getByText("Ghi chú đậm")).toBeInTheDocument();
  });

  it("renders multiLine", () => {
    render(<TableNoteCell note={"Dòng 1\nDòng 2"} multiLine />);
    expect(screen.getByText(/Dòng 1/)).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TableNoteCell note="copy note" copyable />);
    fireEvent.click(screen.getByTestId("table-note-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders nothing if no note", () => {
    render(<TableNoteCell note={null} />);
    expect(screen.queryByTestId("table-note-cell")).toBeNull();
  });
});
