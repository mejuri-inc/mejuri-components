import { render, getByText } from "@testing-library/react";
import React from "react";
import Demo from "./index";

describe("Demo", () => {
  test("should display text", () => {
    const { container } = render(<Demo text='Mejuri 2020' />);

    getByText(container, 'Mejuri 2020');
  });
});
