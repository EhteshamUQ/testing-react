import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Followers from "../Followers";

const MockFollowers = () => {
  return (
    <BrowserRouter>
      <Followers />
    </BrowserRouter>
  );
};

describe("Followers Async Test", () => {
  beforeEach(() => console.log("Before Test"));
  afterEach(() => console.log("After Each"));
  afterAll(() => console.log("After All")); // once after all
  beforeAll(() => console.log("before ALl"));//once before all
  test("Followers Demo", async () => {
    render(<MockFollowers />);
    const followerDiv = await screen.findByTestId("0");
    expect(followerDiv).toBeInTheDocument();
  });

  test("Followers Demo-2", async () => {
    render(<MockFollowers />);
    const followerDiv = await screen.findByTestId("0");
    expect(followerDiv).toBeInTheDocument();
  });
});

// Hooks In Testing
/*
beforeEach() - > runs before each hook
beforeAll() - > runs before all
*/

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      