import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import JobStats from './JobStats';

describe('JobStats', () => {
  const mockJobsites = [
    { id: 1, name: 'A', status: 'Completed' },
    { id: 2, name: 'B', status: 'In Progress' },
    { id: 3, name: 'C', status: 'In Progress' },
    { id: 4, name: 'D', status: 'On Hold' },
  ];

  it('displays the correct count for each status', () => {
    render(<JobStats jobsites={mockJobsites} />);

    expect(screen.getByText('2 On Road')).toBeInTheDocument();
    expect(screen.getByText('1 Completed')).toBeInTheDocument();
    expect(screen.getByText('1 On Hold')).toBeInTheDocument();
  });
});
