import { render, screen, fireEvent } from '@testing-library/react';
import CancelButton from './CancelButton';
import { describe, it, expect, vi } from 'vitest';

describe('CancelButton', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<CancelButton onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
