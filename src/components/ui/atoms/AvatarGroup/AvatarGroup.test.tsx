import { render, screen } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";

const avatars = [
  { src: "https://randomuser.me/api/portraits/men/1.jpg", alt: "A" },
  { src: "https://randomuser.me/api/portraits/women/2.jpg", alt: "B" },
  { src: "https://randomuser.me/api/portraits/men/3.jpg", alt: "C" },
];

describe("AvatarGroup", () => {
  it("renders all avatars when below max", () => {
    render(<AvatarGroup avatars={avatars} />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("renders +N overflow when more than max", () => {
    const big = Array.from({ length: 7 }, (_, i) => ({
      src: `url${i}`,
      alt: String(i)
    }));
    render(<AvatarGroup avatars={big} max={5} />);
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("uses custom size", () => {
    render(<AvatarGroup avatars={avatars} size={48} />);
    const imgs = screen.getAllByRole("img");
    expect(imgs[0]).toHaveAttribute("src", avatars[0].src);
    // Optionally check style
  });
});
