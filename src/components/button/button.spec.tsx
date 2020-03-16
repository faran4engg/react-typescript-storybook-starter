import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import { Button } from "./button";

afterEach(cleanup);

describe("Button ", () => {
  it("should match snapshot", () => {
    const testFn = jest.fn();
    const el = render(
      <Button type="button" onClick={testFn} as="primary">
        hello world
      </Button>
    );
    expect(el.baseElement).toMatchSnapshot();
  });

  it("should render", () => {
    const testFn = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={testFn} as="primary">
        hello world
      </Button>
    );
    getByText(/hello world/i); //if found returns true
  });

  it("should render as a primary button", () => {
    const testFn = jest.fn();
    const { getByRole } = render(
      <Button type="button" onClick={testFn} as="primary">
        hello world
      </Button>
    );
    const el = getByRole("button");
    expect(el.classList.contains("button-primary")).toBe(true);
  });

  it("should render as a secondary button", () => {
    const testFn = jest.fn();
    const { getByRole } = render(
      <Button type="button" onClick={testFn} as="secondary">
        hello world
      </Button>
    );
    const el = getByRole("button");
    expect(el.classList.contains("button-secondary")).toBe(true);
  });

  it("should render as a ghost button", () => {
    const testFn = jest.fn();
    const { getByRole } = render(
      <Button type="button" onClick={testFn} as="ghost">
        hello world
      </Button>
    );
    const el = getByRole("button");
    expect(el.classList.contains("button-ghost")).toBe(true);
  });

  it("should render as a text button", () => {
    const testFn = jest.fn();
    const { getByRole } = render(
      <Button type="button" onClick={testFn} as="text">
        hello world
      </Button>
    );
    const el = getByRole("button");
    expect(el.classList.contains("button-text")).toBe(true);
  });

  it("should render as a button", () => {
    const testFn = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={testFn} as="primary">
        hello world
      </Button>
    );
    const btn = getByText(/hello world/i);
    fireEvent.click(btn);
    expect(testFn).toHaveBeenCalledTimes(1);
    fireEvent.click(btn);
    expect(testFn).toHaveBeenCalledTimes(2);
  });
});
