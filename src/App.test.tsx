import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('renders home page', () => {
    // ARRANGE
    render(<WrappedApp />);

    // ACT

    // EXPECT
    expect(
      screen.getByText("Welcome to Dylan's Create Vite App")
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Welcome to Dylan's Create Vite App"
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('render not found page', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    // ACT

    // EXPECT
    expect(screen.getByText('Not Found Page')).toBeInTheDocument();
  });
});
