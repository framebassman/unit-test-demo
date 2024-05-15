import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('should be red when user click red button', () => {
  const view = render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
  let redButton = screen.getByText(/Make red/i);
  fireEvent.click(redButton);
  redButton = screen.getByText(/Make red/i);
  expect(redButton.classList.contains('red')).toBe(true)
})
