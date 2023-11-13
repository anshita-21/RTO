// CarPlateChecker.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, CircularProgress } from "@mui/material";
import "./CarPlateChecker.css"; // Import the enhanced CSS file

const CarPlateChecker = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePlateNumberChange = (event) => {
    setPlateNumber(event.target.value);
  };

  const checkPlateNumber = () => {
    // Simple validation for non-empty input
    if (!plateNumber.trim()) {
      setError("Please enter a car plate number.");
      return;
    }

    setLoading(true);

    // Simulate an API request or any asynchronous operation
    setTimeout(() => {
      const lastTwoDigits = parseInt(plateNumber.slice(-2), 10);
      const isEven = lastTwoDigits % 2 === 0;
      setResult(isEven ? "Even Scheme" : "Odd Scheme");
      setLoading(false);
      setError("");
    }, 1000);
  };

  return (
    <div className="car-plate-container">
      <Typography variant="h4" className="heading">
        Car Plate Number Checker
      </Typography>
      <TextField
        type="text"
        value={plateNumber}
        onChange={handlePlateNumberChange}
        label="Enter Car Plate Number"
        variant="outlined"
        className="input"
        placeholder="e.g., ABC123"
        error={!!error}
        helperText={error}
      />
      <Button
        onClick={checkPlateNumber}
        variant="contained"
        className="button"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Check"}
      </Button>
      {result && (
        <Typography variant="body1" className={`result ${result && "show"}`}>
          {result}
        </Typography>
      )}

      {/* Add a Link to navigate to the Highlight component */}
      <Link to="/home" className="link">
        Go to Highlight
      </Link>
    </div>
  );
};

export default CarPlateChecker;
