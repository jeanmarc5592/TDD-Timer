import styles from './TimerDisplay.module.css';

type TimerDisplayProps = {
  hours: string;
  minutes: string;
  seconds: string;
}

export const TimerDisplay = ({ hours, minutes, seconds }: TimerDisplayProps) => {
  return (
    <div data-testid="timer-display-component" className={styles.displayContainer}>
      <div className={styles.timeContainer}>
        <span data-testid="timer-hours" className={styles.timeValue}>{hours}</span>
        <span className={styles.timeUnit}>hours</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-minutes" className={styles.timeValue}>{minutes}</span>
        <span className={styles.timeUnit}>minutes</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-seconds" className={styles.timeValue}>{seconds}</span>
        <span className={styles.timeUnit}>seconds</span>
      </div>
    </div>
  )
}
