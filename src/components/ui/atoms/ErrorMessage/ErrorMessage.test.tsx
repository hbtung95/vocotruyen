import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders error text", () => {
    render(<ErrorMessage>Lỗi rồi!</ErrorMessage>);
    expect(screen.getByText("Lỗi rồi!")).toBeInTheDocument();
  });

  it("has alert role for a11y", () => {
    render(<ErrorMessage>Alert</ErrorMessage>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("can hide icon", () => {
    render(<ErrorMessage hideIcon>Không có icon</ErrorMessage>);
    expect(screen.getByText("Không có icon")).toBeInTheDocument();
    // Optional: expect no warning icon
  });

  it("renders with custom id", () => {
    render(<ErrorMessage id="err1">Có id</ErrorMessage>);
    expect(screen.getByText("Có id").parentElement).toHaveAttribute("id", "err1");
  });
});
