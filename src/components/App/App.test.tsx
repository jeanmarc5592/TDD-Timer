import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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

    it("renders only Pause & Stop Button when clicking Play Button", () => {
        render(<App />);
        const playButtonElement = screen.getByRole("button", { name: "play-button" });
        userEvent.click(playButtonElement);
        expect(screen.queryByRole("button", { name: "play-button" })).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "pause-button" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "stop-button" })).toBeInTheDocument();
    });
});