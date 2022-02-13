import styles from './TimerDisplay.module.css';

type TimerDisplayProps = {
  hours: number;
  minutes: number;
  seconds: number;
}

export const TimerDisplay = ({ hours, minutes, seconds }: TimerDisplayProps) => {
  return (
    <div data-testid="timer-display-component" className={styles.displayContainer}>
      <div className={styles.timeContainer}>
        <span data-testid="timer-hours" className={styles.timeValue}>{hours.toString().padStart(2, "0")}</span>
        <span className={styles.timeUnit}>hours</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-minutes" className={styles.timeValue}>{minutes.toString().padStart(2, "0")}</span>
        <span className={styles.timeUnit}>minutes</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-seconds" className={styles.timeValue}>{seconds.toString().padStart(2, "0")}</span>
        <span className={styles.timeUnit}>seconds</span>
      </div>
    </div>
  )
}
