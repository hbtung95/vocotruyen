// src/components/ui/molecules/user/UserCard/UserCard.test.tsx
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("UserCard", () => {
  it("renders name and avatar", () => {
    render(<UserCard name="Jane Doe" avatar="/avatar.jpg" />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders subtitle if provided", () => {
    render(<UserCard name="Jane Doe" avatar="/a.jpg" subtitle="Manager" />);
    expect(screen.getByText("Manager")).toBeInTheDocument();
  });

  it("renders status badge if status is set", () => {
    render(<UserCard name="Jane Doe" avatar="/a.jpg" status="online" />);
    expect(screen.getByLabelText("online")).toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(<UserCard name="Jane Doe" avatar="/a.jpg" actions={<button>Edit</button>} />);
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
