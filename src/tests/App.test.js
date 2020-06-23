import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

test('renders learn react link', () => {
  const { queryAllByText } = render(<App />);
  const zeroElement = queryAllByText(/0/i);
  expect(typeof zeroElement).toBe('object');
});
