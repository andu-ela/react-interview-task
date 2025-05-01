import { render, screen, fireEvent } from '@testing-library/react';
import CreateButton from './CreateButton';
import { describe, it, expect, vi } from 'vitest';

describe('CreateButton', () => {
  it('displays with the text "Create" and calls onClick when clicked', () => {
    const handleClick = vi.fn();

    render(<CreateButton onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /create/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
