import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from '../src/components/Button';

test('The button should increment its text', async () => {
  render(<Button type="primary" />);
  const button = screen.getByText('primary count is 0');
  await button.click();
  expect(button).toHaveTextContent('primary count is 1');
});
