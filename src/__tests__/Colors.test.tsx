import { describe, it, expect } from "vitest";
import { colorShift, generateColor, randomColor } from "../helpers/Colors";

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

describe("colorShift", () => {
  it("should return an array of three numbers", () => {
    const color = [0, 0, 0];
    const shiftedColor = colorShift(color);

    expect(shiftedColor).toBeInstanceOf(Array);
    expect(shiftedColor).toHaveLength(3);

    expect(typeof shiftedColor[0]).toBe("number");
    expect(typeof shiftedColor[1]).toBe("number");
    expect(typeof shiftedColor[2]).toBe("number");

    expect(shiftedColor[0]).toBeGreaterThanOrEqual(0);
    expect(shiftedColor[0]).toBeLessThanOrEqual(255);
    expect(shiftedColor[1]).toBeGreaterThanOrEqual(0);
    expect(shiftedColor[1]).toBeLessThanOrEqual(255);
    expect(shiftedColor[2]).toBeGreaterThanOrEqual(0);
    expect(shiftedColor[2]).toBeLessThanOrEqual(255);

    expect(shiftedColor[0]).not.toBe(color[0]);
    expect(shiftedColor[1]).not.toBe(color[1]);
    expect(shiftedColor[2]).not.toBe(color[2]);

    const color2 = [300, 300, 300];
    const shiftedColor2 = colorShift(color2);

    expect(shiftedColor2[0]).toBe(254);
    expect(shiftedColor2[1]).toBe(254);
    expect(shiftedColor2[2]).toBe(254);

    const color3 = [-300, -300, -300];
    const shiftedColor3 = colorShift(color3);

    expect(shiftedColor3[0]).toBe(1);
    expect(shiftedColor3[1]).toBe(1);
    expect(shiftedColor3[2]).toBe(1);
  });
});
