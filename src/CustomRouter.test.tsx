import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CustomRouter } from './CustomRouter';

test('from App to CustomForm', async () => {
  render(<CustomRouter/>);
  const user = userEvent.setup();

  const button = screen.getByText(/Navigate To Form/i);
  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByText(/Subscribe!/i)).toBeInTheDocument();
})
