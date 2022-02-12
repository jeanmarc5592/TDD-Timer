import { useState } from 'react';

import './App.css';
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
    <div className="App">
      <TimerDisplay />
      {isTimerRunning && (
        <>
          <button aria-label="pause-button" onClick={clickPause}>pause</button>
          <button aria-label="stop-button" onClick={clickStop}>stop</button>
        </>
      )}
      {isTimerStopped && (
        <button aria-label="play-button" onClick={clickPlay}>play</button>
      )}
      {isTimerPaused && (
        <>
          <button aria-label="play-button" onClick={clickPlay}>play</button>
          <button aria-label="stop-button" onClick={clickStop}>stop</button>
        </>
      )}
    </div>
  );
}
