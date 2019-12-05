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

/**
 * case insensitivity applied to "hit" on display component 
 */
test('hit is rendering', () => {
  const container = render(<App/>);
  const hit = container.getByText(/hit/i);
})

//clean up 
//query functions destructured from the object
//case insensitivity applied 
/**
 * cleaning up the code using query function dustructure from the object
 * case insensitivity applied 
 */
test('foul is rendering', () => {
  const {getByText} = render(<App />);
  getByText(/foul/i);
})

/**
 * Used test-id in Dashboard.js 
 */
test("all buttons are rendered to screen", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/hit-display/i);
  getByTestId(/ball-display/i);
  getByTestId(/foul-display/i);
  getByTestId(/strike-display/i);
});
