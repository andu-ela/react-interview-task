import { render, screen, fireEvent } from '@testing-library/react';
import SaveButton from './SaveButton';
import { describe, it, expect, vi } from 'vitest';

describe('SaveButton', () => {
  it('renders with correct text and calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const label = "Save Changes";

    render(<SaveButton onClick={handleClick} label={label} />);

    const button = screen.getByText(label);
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled();
  });
});
