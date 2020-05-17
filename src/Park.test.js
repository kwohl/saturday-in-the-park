import React from 'react';
import { render } from '@testing-library/react';
import Park from './Park';

test('renders learn react link', () => {
  const { getByText } = render(<Park />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
