import { describe, it, expect } from "vitest";
import { generateColor, randomColor } from "../helpers/Colors";

describe("generateColor", () => {
  it("should return an array of three numbers", () => {
    const color = generateColor();

    expect(color).toBeInstanceOf(Array);
    expect(color).toHaveLength(3);

    expect(typeof color[0]).toBe("number");
    expect(typeof color[1]).toBe("number");
    expect(typeof color[2]).toBe("number");

    expect(color[0]).toBeGreaterThanOrEqual(0);
    expect(color[0]).toBeLessThanOrEqual(255);
    expect(color[1]).toBeGreaterThanOrEqual(0);
    expect(color[1]).toBeLessThanOrEqual(255);
    expect(color[2]).toBeGreaterThanOrEqual(0);
    expect(color[2]).toBeLessThanOrEqual(255);

  });
});

describe("randomColor", () => {
  it("should return a number between 0 and 255", () => {
    const color = randomColor();
    expect(color).toBeGreaterThanOrEqual(0);
    expect(color).toBeLessThanOrEqual(255);
  });
});