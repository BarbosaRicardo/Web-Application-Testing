import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  const component = render (<App />);
});

test("strike is rendering", () => {
  const container = render(<App />);
  const display = container.getByText('Strike');
});

test("ball is rendering", () => {
  const container = render(<App />);
  const ball = container.getByText('Ball');
})

test('hit is rendering', () => {
  const container = render(<App/>);
  const hit = container.getByText('Hit');
})

test('foul is rendering', () => {
  const container = render(<App />);
  const foul = container.getByText('Foul');
})
