import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JobSiteList from './JobSiteList';

// Create a mock for useNavigate
const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('JobSiteList', () => {
  const mockJobsites = [
    { id: 1, name: '1658 E 23rd St', status: 'Completed' },
    { id: 2, name: '1705 E 22nd St', status: 'On Hold' },
  ];

  it('displays the job site names', () => {
    render(<JobSiteList jobsites={mockJobsites} />, { wrapper: MemoryRouter });

    expect(screen.getByText('1658 E 23rd St')).toBeInTheDocument();
    expect(screen.getByText('1705 E 22nd St')).toBeInTheDocument();
  });

  it('calls navigate when a job site is clicked', () => {
    render(<JobSiteList jobsites={mockJobsites} />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByText('1658 E 23rd St'));

    expect(mockNavigate).toHaveBeenCalledWith('/inventory/1', {
      state: mockJobsites[0],
    });
  });
});
