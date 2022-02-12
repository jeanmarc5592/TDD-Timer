import { useState } from 'react';

import './App.css';
import { TimerDisplay } from '../TimerDisplay';

export const App = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const clickPlay = () => {
    setIsTimerRunning(true);
  };

  return (
    <div className="App">
      <TimerDisplay />
      {isTimerRunning ? (
        <>
          <button aria-label="pause-button"></button>
          <button aria-label="stop-button"></button>
        </>
      ) : (
        <button aria-label="play-button" onClick={clickPlay}></button>
      )}
    </div>
  );
}
