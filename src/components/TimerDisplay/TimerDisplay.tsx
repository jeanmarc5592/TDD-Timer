import styles from './TimerDisplay.module.css';

export const TimerDisplay = () => {
  return (
    <div data-testid="timer-display-component" className={styles.displayContainer}>
      <div className={styles.timeContainer}>
        <span data-testid="timer-hours" className={styles.timeValue}>00</span>
        <span className={styles.timeUnit}>hours</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-minutes" className={styles.timeValue}>00</span>
        <span className={styles.timeUnit}>minutes</span>
      </div>
      <span className={styles.timeValue}>:</span>
      <div className={styles.timeContainer}>
        <span data-testid="timer-seconds" className={styles.timeValue}>00</span>
        <span className={styles.timeUnit}>seconds</span>
      </div>
    </div>
  )
}
