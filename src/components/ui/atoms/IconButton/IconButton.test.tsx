import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("renders icon and a11y label", () => {
    render(<IconButton icon="✏️" aria-label="Sửa" />);
    expect(screen.getByLabelText("Sửa")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const fn = jest.fn();
    render(<IconButton icon="❌" aria-label="Xoá" onClick={fn} />);
    fireEvent.click(screen.getByLabelText("Xoá"));
    expect(fn).toHaveBeenCalled();
  });

  it("shows spinner when loading", () => {
    render(<IconButton icon="🔍" loading aria-label="Đang xử lý" />);
    expect(screen.getByLabelText("Đang xử lý")).toBeInTheDocument();
    expect(screen.getByText("⏳")).toBeInTheDocument();
  });

  it("is disabled when loading or disabled", () => {
    render(<IconButton icon="🛑" loading aria-label="..." />);
    expect(screen.getByRole("button")).toBeDisabled();
    render(<IconButton icon="🔒" disabled aria-label="..." />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
