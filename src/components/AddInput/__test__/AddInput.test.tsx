import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";


// Fire Events
const MockSetToDo = jest.fn(); // Mock function doesn't do anything
describe("Checking If Input Works", () => {
  test("Testing Add Input -Rendering", () => {
    render(<AddInput todos={[]} setTodos={MockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument(); // If Element is in Document
  });
  test("Testing Add Input -Change Event", () => {
    render(<AddInput todos={[]} setTodos={MockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect((inputElement as HTMLInputElement).value).toBe(
      "Go Grocery Shopping"
    ); // If Element is in Document
  });

  test("Testing Add Input -Button Click event", () => {
    render(<AddInput todos={[]} setTodos={MockSetToDo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.click(buttonElement);
    expect((inputElement as HTMLInputElement).value).toBe(""); // If Element is in Document
  });
});
