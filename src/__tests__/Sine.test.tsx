import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Sine from "../components/Sine";

describe("Sine rendering", async () => {
  it("should render", async () => {
    render(<Sine />);
    expect(true).toBeTruthy();
  });
});
