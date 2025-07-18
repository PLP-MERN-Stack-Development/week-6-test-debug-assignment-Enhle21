import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import axios from "axios";

jest.mock("axios");

test("renders Bug Tracker", async () => {
  axios.get.mockResolvedValue({ data: [] });
  render(<App />);
  expect(screen.getByText(/Bug Tracker/i)).toBeInTheDocument();
});