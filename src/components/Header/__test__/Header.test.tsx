import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Preference top to bottom

test("renders learn react link", () => {
  render(<Header title="My Header" />);
  const linkElement = screen.getByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});

// test (testName , callback) it and test are same

// test("renders learn react link - Test", () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.getByRole("heading");
//   expect(linkElement).toBeInTheDocument();
// });

//Fails because Multiple Heading tags
// test("getByRole - with Name/Text", () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.getByRole("heading", { name: "My Header" });
//   expect(linkElement).toBeInTheDocument();
// });
// //getByTitle

// test("using getByTitle", () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.getByTitle("head");
//   expect(linkElement).toBeInTheDocument();
// });

// //
// test("using getByTestId", async () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.getByTestId(`heading-1`);
//   expect(linkElement).toBeInTheDocument();
// });

// // FIND by -----------------> Async await

// test("using Find by", async () => {
//   render(<Header title="My Header" />);
//   const linkElement = await screen.findByText(`My Header`);
//   expect(linkElement).toBeInTheDocument();
// });

// /// Query By

// test("using QueryBy", async () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.queryByText(`My Header`);
//   expect(linkElement).toBeInTheDocument();
// });

// // if we need to find if element not present
// test("using QueryBy to find elements not in", async () => {
//   render(<Header title="My Header" />);
//   const linkElement = screen.queryByText(`My Hello`);
//   expect(linkElement).not.toBeInTheDocument();
// });
// //All by 

// test("using AllBy", async () => {
//     render(<Header title="My Header" />);
//     const linkElements = screen.getAllByRole(`heading`);
//     expect(linkElements.length).toBe(0);
//   });

