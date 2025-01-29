import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Sine from "../components/Sine";

describe("Sine rendering with props", async () => {
  it("should render", async () => {
    render(<Sine width={100} height={100} />);

  });

  expect(document.querySelector("canvas")).not.toBeNull();
});
