import { render, screen } from "@testing-library/react";
import { TimerDisplay } from "./TimerDisplay";

describe("TimerDisplay", () => {
    it("renders without crashing", () => {
        const TimerDisplayProps = {
            hours: "00",
            minutes: "00",
            seconds: "00"
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
    });

    it("is initially reset", () => {
        const TimerDisplayProps = {
            hours: "00",
            minutes: "00",
            seconds: "00"
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
        expect(screen.getByTestId("timer-hours").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-minutes").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-seconds").innerHTML).toBe("00");
    });

    it("shows labels for 'hours', 'minutes' and 'seconds'", () => {
        const TimerDisplayProps = {
            hours: "00",
            minutes: "00",
            seconds: "00"
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
        expect(screen.getByText(/hours/i)).toBeInTheDocument();
        expect(screen.getByText(/minutes/i)).toBeInTheDocument();
        expect(screen.getByText(/seconds/i)).toBeInTheDocument();
    });
});