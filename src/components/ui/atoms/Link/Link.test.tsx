import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders children and href", () => {
    render(<Link href="https://google.com">Google</Link>);
    const a = screen.getByText("Google");
    expect(a).toHaveAttribute("href", "https://google.com");
  });

  it("has external target", () => {
    render(<Link href="https://test.com" external>Test</Link>);
    expect(screen.getByText("Test").closest("a")).toHaveAttribute("target", "_blank");
  });

  it("has underline if enabled", () => {
    render(<Link href="/">Test</Link>);
    expect(screen.getByText("Test")).toHaveClass("underline");
  });

  it("can be disabled", () => {
    render(<Link href="/" disabled>Off</Link>);
    expect(screen.getByText("Off")).toHaveAttribute("aria-disabled", "true");
  });
});
