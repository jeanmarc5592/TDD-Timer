import { useState } from 'react';

import './App.css';
import { TimerDisplay } from '../TimerDisplay';

export const App = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const clickPlay = () => {
    setIsTimerRunning(true);
  };

  const clickStop = () => {
    setIsTimerRunning(false);
  };

  return (
    <div className="App">
      <TimerDisplay />
      {isTimerRunning ? (
        <>
          <button aria-label="pause-button">pause</button>
          <button aria-label="stop-button" onClick={clickStop}>stop</button>
        </>
      ) : (
        <button aria-label="play-button" onClick={clickPlay}>play</button>
      )}
    </div>
  );
}
