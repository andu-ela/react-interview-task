import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/jobsite.css";

export default function JobSiteList({ jobsites }) {
  const navigate = useNavigate();

  const handleClick = (job) => {
    navigate(`/inventory/${job.id}`, { state: job });
  };

  return (
    <div>
      <table className="jobsite-table">
        <thead>
          <tr>
            <th>Jobsite Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsites.map((job) => (
            <tr key={job.id}>
              <td className="jobsite-name" onClick={() => handleClick(job)}>
                {job.name}
              </td>
              <td>
                <span
                  className={`status ${job.status
                    .toLowerCase()
                    .replace(/\s/g, "")}`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
