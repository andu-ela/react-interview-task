import { render, screen, fireEvent } from '@testing-library/react';
import GoBackButton from './GoBackButton';
import { describe, it, expect, vi } from 'vitest';

describe('GoBackButton', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<GoBackButton onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
