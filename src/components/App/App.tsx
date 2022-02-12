import { useState } from 'react';

import styles from './App.module.css';
import { TimerDisplay } from '../TimerDisplay';

export const App = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerStopped, setIsTimerStopped] = useState(true);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const clickPlay = () => {
    setIsTimerStopped(false);
    setIsTimerPaused(false);
    setIsTimerRunning(true);
  };

  const clickStop = () => {
    setIsTimerStopped(true);
    setIsTimerPaused(false);
    setIsTimerRunning(false);
  };

  const clickPause = () => {
    setIsTimerPaused(true);
    setIsTimerRunning(false);
    setIsTimerStopped(false);
  };

  return (
    <div className={styles.appContainer}>
      <TimerDisplay />
      <div className={styles.buttonContainer}>
        {isTimerRunning && (
          <>
            <button aria-label="pause-button" onClick={clickPause}>
              <span className="material-icons">pause</span>
            </button>
            <button aria-label="stop-button" onClick={clickStop}>
              <span className="material-icons">stop</span>
            </button>
          </>
        )}
        {isTimerStopped && (
          <button aria-label="play-button" onClick={clickPlay}>
            <span className="material-icons">play_arrow</span>
          </button>
        )}
        {isTimerPaused && (
          <>
            <button aria-label="play-button" onClick={clickPlay}>
              <span className="material-icons">play_arrow</span>
            </button>
            <button aria-label="stop-button" onClick={clickStop}>
              <span className="material-icons">stop</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
