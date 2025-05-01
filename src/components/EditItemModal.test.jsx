import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EditItemModal from './EditItemModal';

const mockItem = {
  id: 1,
  item: 'A100',
  quantity: 5,
  description: 'Old desc',
  notes: 'Old note',
};

describe('EditItemModal', () => {
  it('displays input fields with existing values', () => {
    render(
      <EditItemModal item={mockItem} onClose={() => {}} onSave={() => {}} />
    );

    expect(screen.getByDisplayValue('A100')).toBeInTheDocument();
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Old desc')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Old note')).toBeInTheDocument();
  });

  it('calls onClose when ✕ button is clicked', () => {
    const onCloseMock = vi.fn();

    render(
      <EditItemModal item={mockItem} onClose={onCloseMock} onSave={() => {}} />
    );

    fireEvent.click(screen.getByText('✕'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onSave with updated data', () => {
    const onSaveMock = vi.fn();

    render(
      <EditItemModal item={mockItem} onClose={() => {}} onSave={onSaveMock} />
    );

    fireEvent.change(screen.getByPlaceholderText('Set Quantity'), {
      target: { value: '10' },
    });

    fireEvent.click(screen.getByText('Save Changes'));

    expect(onSaveMock).toHaveBeenCalledWith({
      ...mockItem,
      quantity: 10,
    });
  });
});
