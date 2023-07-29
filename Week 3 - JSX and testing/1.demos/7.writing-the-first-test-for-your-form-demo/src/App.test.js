import { fireEvent, render, screen } from "@testing-library/react";
// fireEvent is a utility function that allows you to simulate events on DOM nodes

import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
    
    // mock function from Jest
    //enables you to replace complex functions from your code with others that are simpler and simulate the same behavior
    const handleSubmit =  jest.fn() 
    // render the app component in the artificial DOM environment
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    // simulate an event on the range input : lower the score to 4
    fireEvent.change(rangeInput, { target: { value: "4" } }); 
    
    const submitButton = screen.getByRole("button"); // get the submit button
    // get by role is a query that allows you to find elements by their role attribute
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled(); // check if the handleSubmit function has not been called
    expect(submitButton).toHaveAttribute("disabled"); // check if the submit button is disabled
  });
});
