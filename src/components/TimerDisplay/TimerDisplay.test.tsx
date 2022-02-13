import { render, screen } from "@testing-library/react";
import { TimerDisplay } from "./TimerDisplay";

describe("TimerDisplay", () => {
    it("renders without crashing", () => {
        const TimerDisplayProps = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
    });

    it("is initially reset", () => {
        const TimerDisplayProps = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
        expect(screen.getByTestId("timer-hours").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-minutes").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-seconds").innerHTML).toBe("00");
    });

    it("shows labels for 'hours', 'minutes' and 'seconds'", () => {
        const TimerDisplayProps = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        render(<TimerDisplay {...TimerDisplayProps} />);
        expect(screen.getByText(/hours/i)).toBeInTheDocument();
        expect(screen.getByText(/minutes/i)).toBeInTheDocument();
        expect(screen.getByText(/seconds/i)).toBeInTheDocument();
    });

    it("shows elapsed time", () => {
        const TimerDisplayProps = {
            hours: 0,
            minutes: 11,
            seconds: 45
        };
        render(<TimerDisplay {...TimerDisplayProps} />);
        expect(screen.getByTestId("timer-hours").innerHTML).toBe("00");
        expect(screen.getByTestId("timer-minutes").innerHTML).toBe("11");
        expect(screen.getByTestId("timer-seconds").innerHTML).toBe("45");
    });
});