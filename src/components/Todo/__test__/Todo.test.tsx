import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const addToDo = (tasks: Array<string>) => {
  tasks.forEach((task) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

// Integration Testing
const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}; // Mock function doesn't do anything
describe("Checking If To Do Works", () => {
  test("To-DO", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: "Go Shopping" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  test("Should render Multiple elements", () => {
    render(<MockTodo />);
    const tasks = ["Go Shopping", "Wash my Hands", "Go Home"];
    addToDo(tasks);
    const divElements = screen.getAllByTestId("divtesting");
    expect(divElements.length).toBe(tasks.length);
  });

  test("Should not have completed class when rendered", () => {
    render(<MockTodo />);
    const tasks = ["Go Shopping"];
    addToDo(tasks);
    const divElement = screen.getByTestId("divtesting");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("Should Gray out when clicked", () => {
    render(<MockTodo />);
    const tasks = ["Go Shopping"];
    addToDo(tasks);
    const divElement = screen.getByTestId("divtesting");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
