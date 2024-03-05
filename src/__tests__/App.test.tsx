import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "../App";

describe("Main page rendering", async () => {
  it("should render", async () => {
    render(<App />);
    const title = await screen.queryByText("this is a title");

    expect(title).not.toBeNull();
    expect(title).toBeInstanceOf(HTMLElement);
    expect(title?.tagName).toBe("H1");
  });
});
