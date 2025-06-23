import { render, screen } from "@testing-library/react";
import UserCardCompact from "./UserCardCompact";

describe("UserCardCompact", () => {
  it("renders name and avatar", () => {
    render(<UserCardCompact name="Anna Nguyen" avatar="/anna.jpg" />);
    expect(screen.getByText("Anna Nguyen")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders subtitle if provided", () => {
    render(<UserCardCompact name="Anna" avatar="/a.jpg" subtitle="Member" />);
    expect(screen.getByText("Member")).toBeInTheDocument();
  });

  it("renders status badge if status is set", () => {
    render(<UserCardCompact name="Anna" avatar="/a.jpg" status="busy" />);
    expect(screen.getByLabelText("busy")).toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(<UserCardCompact name="Anna" avatar="/a.jpg" actions={<button>Edit</button>} />);
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
