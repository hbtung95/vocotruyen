import { render, screen, fireEvent } from "@testing-library/react";
import Image from "./Image";

describe("Image", () => {
  it("renders image with alt", () => {
    render(<Image src="https://via.placeholder.com/40" alt="Hình test" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Hình test");
  });

  it("renders placeholder before loaded", () => {
    render(<Image src="..." alt="Plh" placeholder={<span>PLH</span>} />);
    expect(screen.getByText("PLH")).toBeInTheDocument();
  });

  it("renders fallback on error", () => {
    render(<Image src="/error-url" alt="Fallback" fallback={<span>Err</span>} />);
    // Giả lập lỗi
    fireEvent.error(screen.getByRole("img").querySelector("img")!);
    expect(screen.getByText("Err")).toBeInTheDocument();
  });
});
