import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import JobSiteList from "../components/JobSiteList";
import JobStats from "../components/JobStats";
import CreateButton from "../components/CreateButton";
import CreateJobSiteModal from "../components/CreateJobSiteModal";
import "../styles/jobsite.css";
import "../styles/jobstats.css";

export default function JobSitesPage() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const [jobsites, setJobsites] = useState([
    { id: 1, name: "1658 E 23rd St, Brooklyn, NY 11229, USA", category: "Sidewalk Shed", status: "Completed" },
    { id: 2, name: "1705 E 22nd St, Brooklyn, NY 11229, USA", category: "Scaffold", status: "On Hold" },
    { id: 3, name: "262 3rd Ave, New York, NY", category: "Shoring", status: "In Progress" },
  ]);

  const handleSave = (newJob) => {
    setJobsites((prev) => [...prev, { id: Date.now(), ...newJob }]);
  };

  return (
    <div className="jobsite-page">
      <JobStats jobsites={jobsites} />
      <div className="jobsite-header-bar">
        <h2 className="section-title">Title</h2>
        <div className="info-section">
          <div className="info-text">
          <div className="info-text">
  <span className="modal-info-icon"><FaInfoCircle /></span>
  Informative piece of text that can be used regarding this modal.
</div>

          </div>
          <div className="jobsite-actions">
            <input
              type="text"
              placeholder="Search a driver"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          <CreateButton onClick={() => setShowModal(true)} />

          </div>
        </div>
      </div>

      <JobSiteList
        jobsites={jobsites.filter((job) =>
          job.name.toLowerCase().includes(search.toLowerCase())
        )}
      />

      {showModal && (
        <CreateJobSiteModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
