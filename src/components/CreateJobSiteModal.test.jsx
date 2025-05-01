import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateJobSiteModal from './CreateJobSiteModal';
import '@testing-library/jest-dom';

describe('CreateJobSiteModal', () => {
  const onClose = vi.fn();
  const onSave = vi.fn();

  test('displays modal with input for jobsite name', () => {
    render(<CreateJobSiteModal onClose={onClose} onSave={onSave} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type the jobsite’s name")).toBeInTheDocument();
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });

  test('calls onClose when ✕ button is clicked', () => {
    render(<CreateJobSiteModal onClose={onClose} onSave={onSave} />);
    fireEvent.click(screen.getByText('✕'));
    expect(onClose).toHaveBeenCalled();
  });
});
