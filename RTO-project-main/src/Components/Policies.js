// Policies.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Policies.css";

const PolicyDetails = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div onClick={handleToggle} className="policy-title">
        <strong>{title}</strong>
      </div>
      {expanded && <p className="policy-details">{details}</p>}
    </div>
  );
};

const Policies = () => {
  return (
    <div className="policies-container">
      <h2>Acts, Policies, and Rules</h2>
      <PolicyDetails
        title="Section 1. Short title, extent and commencement"
        details="Details for Section 1. Short title, extent and commencement..."
      />
      {/* Add more PolicyDetails components for other sections */}

      {/* Go Back to Home button */}
      <Link to="/home" className="go-back-button">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Policies;
