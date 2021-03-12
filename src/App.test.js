import { render, screen } from '@testing-library/react';
import App from './App';

describe('app tests', () => {

  test('renders government link text', () => {
    render(<App />);
    const linkElement = screen.getByText(/here/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Answer', () => {
    render(<App />);
    const answer = screen.getByRole('heading');
    expect(answer.textContent).toEqual('No');
    expect(answer).toBeInTheDocument();
  });

});