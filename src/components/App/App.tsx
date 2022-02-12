import './App.css';
import { TimerDisplay } from '../TimerDisplay';

export const App = () => {
  return (
    <div className="App">
      <TimerDisplay />
      <button aria-label="play-button"></button>
    </div>
  );
}
