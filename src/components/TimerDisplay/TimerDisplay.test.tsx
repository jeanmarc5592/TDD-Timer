import { render, screen } from "@testing-library/react";
import { TimerDisplay } from "./TimerDisplay";

describe("TimerDisplay", () => {
    it("renders without crashing", () => {
        render(<TimerDisplay />);
    });

    it("is initially reset", () => {
        // Shows "00:00:00"
        render(<TimerDisplay />);
        expect(screen.getByTestId("timer-hours").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-minutes").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-seconds").innerHTML).toBe("00");
    });

    it("shows labels for 'hours', 'minutes' and 'seconds'", () => {
        render(<TimerDisplay />);
        expect(screen.getByText(/hours/i)).toBeInTheDocument();
        expect(screen.getByText(/minutes/i)).toBeInTheDocument();
        expect(screen.getByText(/seconds/i)).toBeInTheDocument();
    });
});