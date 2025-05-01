import { render, screen, fireEvent } from '@testing-library/react';
import JobSitesPage from './JobSitesPage';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// Mock child components
vi.mock('../components/JobStats', () => ({
  default: () => <div data-testid="jobstats">Mocked JobStats</div>,
}));

vi.mock('../components/JobSiteList', () => ({
  default: ({ jobsites }) => (
    <div data-testid="jobsite-list">
      {jobsites.map((j) => (
        <div key={j.id}>{j.name}</div>
      ))}
    </div>
  ),
}));

vi.mock('../components/CreateJobSiteModal', () => ({
  default: ({ onClose }) => (
    <div data-testid="modal">
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe('JobSitesPage', () => {
  it('renders JobStats, search input, and job site list', () => {
    render(
      <MemoryRouter>
        <JobSitesPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('jobstats')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search a driver/i)).toBeInTheDocument();
    expect(screen.getByTestId('jobsite-list')).toBeInTheDocument();
  });

  it('filters job sites based on input', () => {
    render(
      <MemoryRouter>
        <JobSitesPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/search a driver/i), {
      target: { value: '262' },
    });

    expect(screen.getByText(/262 3rd ave/i)).toBeInTheDocument();
    expect(screen.queryByText(/1705 e 22nd st/i)).not.toBeInTheDocument();
  });

  it('opens and closes the Create Job Site modal', () => {
    render(
      <MemoryRouter>
        <JobSitesPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /create/i }));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/close/i));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
