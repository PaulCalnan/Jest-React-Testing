import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: (/change to blue/i) });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

});



