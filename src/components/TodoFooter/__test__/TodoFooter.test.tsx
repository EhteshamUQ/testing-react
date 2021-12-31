import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

interface MockProps {
  numberOfIncompleteTasks: number;
}
// Preference top to bottom
const MockToDoFooter = ({ numberOfIncompleteTasks }: MockProps) => {
  return (
    <>
      <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
      </BrowserRouter>
    </>
  );
};
// Making a Mock Element to Mock the To Do Footer
// Using Assertions
test("Testing to-doFooter - Singular Version 1 task left", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument(); // If Element is in Document
});

test("Testing to-doFooter - Multiple Version 1 task left", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={7} />);
  const paragraphElement = screen.getByText(/7 tasks left/i);
  expect(paragraphElement).toBeTruthy(); //  always return true
});

// Describe block helps us to Organize Tests by adding common ones to a describe block.
// Can have Nested Describe blocks
describe("Other Assertion Methods", () => {
  test("Testing to-doFooter - Other Assertions", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={7} />);
    const paragraphElement = screen.getByText(/7 tasks left/i);
    expect(paragraphElement).toBeVisible(); //  if Element is visible to user.
    // for it to be not visible use
    //expect(element).not.toBeVisible()
  });

  test("Testing to-doFooter - Other Assertions -2", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={7} />);
    const paragraphElement = screen.getByText(/7 tasks left/i);
    expect(paragraphElement).toContainHTML("h4"); //  if Element Contains HTML. (p tag) // Fails as h4 isn't that tag
  });

  test("Testing to-doFooter - Other Assertions-3", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={7} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent("7 tasks left"); //  if Element is brought using different
    //method , then we can use this to check if it has text content equal to parameter.
  });

  test("Testing to-doFooter - Other Assertions-4", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={7} />);
    const paragraphElement = screen.getByTestId("para");
    expect((paragraphElement as HTMLElement).textContent).toBe("7 tasks left"); //  if Element is brought using different
    //method , then we can use this to check if it has text content equal to parameter.
  });
});
