import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Canvas from "../components/Canvas";

describe("Canvas rendering", async () => {
  it("should render", async () => {
    render(<Canvas />);
    const canvas = await screen.queryByRole("canvas");

    expect(canvas).not.toBeNull();
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);
  });
});
