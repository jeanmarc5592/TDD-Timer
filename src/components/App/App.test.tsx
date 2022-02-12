import { render, screen } from "@testing-library/react";
import { App } from './App';

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />);
    });

    it("renders initially Timer Display Component", () => {
        render(<App />);
        expect(screen.getByTestId("timer-display-component")).toBeInTheDocument();
    });

    it("renders initially Play Button", () => {
        render(<App />);
        expect(screen.getByRole("button", { name: "play-button" })).toBeInTheDocument();
    });
});