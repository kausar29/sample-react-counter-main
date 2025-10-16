import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/simple counter/i);
  expect(titleElement).toBeInTheDocument();
});
