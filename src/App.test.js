import { render, screen } from '@testing-library/react';
import SharedComponent from './App';

test('renders learn react link', () => {
  render(<SharedComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
