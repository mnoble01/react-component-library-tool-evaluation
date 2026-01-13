import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';
import { describe, expect, test, it } from 'vitest';


describe('Button', () => {
  it('renders', () => {
    render(<Button type="primary" className='custom-button' />);
    
    const button = screen.getByText('primary count is 0');
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
  });
});