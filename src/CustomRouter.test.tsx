import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CustomRouter } from './CustomRouter';

test('from App to CustomForm', async () => {
  render(<CustomRouter/>);
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Navigate To Form/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Navigate To Form/i));
  expect(screen.getByText(/Subscribe!/i)).toBeInTheDocument();
})
