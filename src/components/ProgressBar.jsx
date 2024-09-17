import React from "react";
import '../styles/ProgressBar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{`Step ${currentStep + 1} of ${totalSteps}`}</p>
    </div>
  );
};

export default ProgressBar;
