import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Log App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Log App/i);
  expect(linkElement).toBeInTheDocument();
});
