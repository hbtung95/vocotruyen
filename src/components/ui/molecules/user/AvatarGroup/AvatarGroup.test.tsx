import { render, screen } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";

const avatars = [
  { src: "/a1.jpg", alt: "A" },
  { src: "/a2.jpg", alt: "B" },
  { src: "/a3.jpg", alt: "C" },
  { src: "/a4.jpg", alt: "D" },
];

describe("AvatarGroup", () => {
  it("renders correct number of avatars", () => {
    render(<AvatarGroup avatars={avatars} maxVisible={3} />);
    // 3 avatars + 1 extra count
    expect(screen.getAllByRole("img").length).toBe(3);
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("renders all avatars if avatars <= maxVisible", () => {
    render(<AvatarGroup avatars={avatars} maxVisible={5} />);
    expect(screen.getAllByRole("img").length).toBe(4);
    expect(screen.queryByText(/\+\d+/)).toBeNull();
  });

  it("renders custom showMoreLabel if provided", () => {
    render(
      <AvatarGroup
        avatars={avatars}
        maxVisible={2}
        showMoreLabel={(count) => <span>thêm {count}</span>}
      />
    );
    expect(screen.getByText("thêm 2")).toBeInTheDocument();
  });
});
