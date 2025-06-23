import { render, screen } from "@testing-library/react";
import InputGroup from "./InputGroup";

describe("InputGroup", () => {
  it("renders children input", () => {
    render(<InputGroup><input placeholder="Nhập gì đó" /></InputGroup>);
    expect(screen.getByPlaceholderText("Nhập gì đó")).toBeInTheDocument();
  });

  it("renders prepend and append", () => {
    render(<InputGroup prepend="Tiền" append=".000đ"><input /></InputGroup>);
    expect(screen.getByText("Tiền")).toBeInTheDocument();
    expect(screen.getByText(".000đ")).toBeInTheDocument();
  });

  it("has full width by default", () => {
    render(<InputGroup><input /></InputGroup>);
    expect(screen.getByRole("group")).toHaveClass("w-full");
  });
});
