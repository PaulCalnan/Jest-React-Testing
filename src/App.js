import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >Change to {newButtonColor}</button>
      <br />
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}

        // accesibility for screen readers
        aria-checked={disabled}

        onChange={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="enable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
