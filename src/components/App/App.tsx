import { useState, useEffect, useRef } from 'react';

import styles from './App.module.css';
import { TimerDisplay } from '../TimerDisplay';

const initialTimerValues = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

export const App = () => {
  // TODO: Refactor --> implement useReducer
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerStopped, setIsTimerStopped] = useState(true);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timerValues, setTimerValues] = useState(initialTimerValues);
  let timerId = useRef<null | number>(null);

  const clearTimer = () => {
    if (timerId.current) {
      window.clearInterval(timerId.current);
    }
  }

  useEffect(() => {
    if (isTimerRunning) {
      timerId.current = window.setInterval(() => {
        setTimerValues(currState => ({ ...currState, seconds: currState.seconds++ }));
      }, 1000);
    }

    return () => clearTimer();
  }, [isTimerRunning]);

  useEffect(() => {
    if (isTimerPaused) {
      clearTimer();
    }
  }, [isTimerPaused]);

  useEffect(() => {
    if (isTimerStopped) {
      clearTimer();
      setTimerValues({ ...initialTimerValues });
    }
  }, [isTimerStopped]);

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
      <TimerDisplay {...timerValues} />
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
