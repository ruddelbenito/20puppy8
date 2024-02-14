import { render } from "@testing-library/react";
import Board from "@/components/board";

describe("Board", () => {
  it("should render board with 16 cells", () => {
    const { container } = render(<Board />);
    const cellElements = container.querySelectorAll(".cell");

    expect(cellElements.length).toEqual(16);
  });

  it("should initialize board with two tiles", () => {
    const { container } = render(<Board />);
    const tiles = container.querySelectorAll(".tile");

    expect(tiles.length).toEqual(2);
  });
});
