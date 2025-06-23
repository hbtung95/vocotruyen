import { render, screen, fireEvent } from "@testing-library/react";
import AthleteCard from "./AthleteCard";

describe("AthleteCard", () => {
  it("renders name and avatar", () => {
    render(<AthleteCard id="1" name="Nguyễn Văn A" avatarUrl="avatar.jpg" />);
    expect(screen.getByText("Nguyễn Văn A")).toBeInTheDocument();
    expect(screen.getByAltText("Nguyễn Văn A")).toBeInTheDocument();
  });

  it("shows club, rank, and medals if provided", () => {
    render(<AthleteCard id="1" name="B" club="CLB X" rank="A" medals={{gold: 1, silver: 2, bronze: 3}} />);
    expect(screen.getByText("CLB X")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText(/🥇1/)).toBeInTheDocument();
  });

  it("handles onClick", () => {
    const fn = jest.fn();
    render(<AthleteCard id="2" name="C" onClick={fn} />);
    fireEvent.click(screen.getByText("C"));
    expect(fn).toHaveBeenCalled();
  });
});
