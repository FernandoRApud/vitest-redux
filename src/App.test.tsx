import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound/NotFound';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', {
      level: 1,
    })).toHaveTextContent('Hello World');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <NotFound />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Not Found');
  });
});
