/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination Component", () => {
  it("renders without errors", () => {
    // Render the component
    const { container } = render(
      <Pagination length={10} pageSize={5} currentPage={1} onClick={() => {}} />
    );

    // Assert that the component is rendered
    expect(container).toBeInTheDocument();
  });

  it("displays the correct number of page buttons", () => {
    // Render the component with different props
    render(
      <Pagination length={15} pageSize={2} currentPage={1} onClick={() => {}} />
    );

    const buttons = screen.getAllByRole("listitem");

    // Assert that the correct number of buttons is rendered
    expect(buttons.length).toBe(8);
  });

  it("calls onClick when a page button is clicked", () => {
    // Define a mock function for the onClick handler
    const onClickMock = jest.fn();

    // Render the component with the mock function
    render(
      <Pagination
        length={20}
        pageSize={5}
        currentPage={1}
        onClick={onClickMock}
      />
    );

    // Find and click a page button (e.g., page 2)
    const page2Button = screen.getByText("2");
    fireEvent.click(page2Button);

    // Assert that the mock function was called with the correct argument (2)
    expect(onClickMock).toHaveBeenCalledWith(2);
  });

  test("active class when page 3 is clicked:", () => {
    const onClickMock = jest.fn();

    render(
      <Pagination
        length={20}
        pageSize={5}
        currentPage={1}
        onClick={onClickMock}
      />
    );

    const activeButton = `py-1 px-3 mx-1 my-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700
      focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-100
      text-center text-sm font-light shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
      rounded-lg`;

    const page3Button = screen.getByRole("listitem", {
      name: /3/i,
    });
    screen.debug();
    userEvent.click(page3Button);
    screen.debug();
    expect(screen.getByText("3")).toHaveClass(activeButton);
  });
});
