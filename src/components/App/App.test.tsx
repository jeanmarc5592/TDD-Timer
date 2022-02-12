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

    it("renders only Play Button when clicking Stop Button", () => {
        render(<App />);
        // Click "Play" first to show "Pause" & "Stop"
        const playButtonElement = screen.getByRole("button", { name: "play-button" });
        userEvent.click(playButtonElement);
        // Click "Stop"
        const stopButtonElement = screen.getByRole("button", { name: "stop-button" });
        userEvent.click(stopButtonElement);
        expect(screen.getByRole("button", { name: "play-button" })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "pause-button" })).not.toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "stop-button" })).not.toBeInTheDocument();
    });

    it("renders Play Button for Pause Button when clicking Pause Button", () => {
        render(<App />);
        // Click "Play" first to show "Pause" & "Stop"
        const playButtonElement = screen.getByRole("button", { name: "play-button" });
        userEvent.click(playButtonElement);
        // Click "Pause"
        const pauseButtonElement = screen.getByRole("button", { name: "pause-button" });
        userEvent.click(pauseButtonElement);
        expect(screen.getByRole("button", { name: "play-button" })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "pause-button" })).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "stop-button" })).toBeInTheDocument();
    });
});