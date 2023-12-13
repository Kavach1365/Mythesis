import React from 'react';
import Calendar from 'react-calendar';
import './StudentDashboard.css'; // Include your CSS styles for the dashboard if needed
import 'react-calendar/dist/Calendar.css';

// Dummy data for the student's current thesis and progress
const currentThesis = {
  title: 'Your Thesis Title',
  guide: 'Your Guide Name',
};

const progressData = [
  { step: 1, label: 'Proposal', completed: true },
  { step: 2, label: 'Literature Review', completed: false },
  { step: 3, label: 'Data Collection', completed: false },
  // Add more steps as needed
];

const importantDates = [
  new Date(2023, 11, 15), // Month is 0-indexed
  new Date(2023, 11, 20),
  // Add more important dates as needed
];

// React functional component for the Student Dashboard
export const StudentDashboard = () => {
  return (
    <div className="container">
      {/* My Current Thesis and Calendar */}
      <div className="card-container">
        {/* My Current Thesis */}
        <div className="card" style={{ minWidth: '400px' }}>
          <div className="card-header">
            <h1 className="h3 mb-4 text-white">My Current Thesis</h1>
          </div>
          <div className="card-body">
            <p>Thesis Title: {currentThesis.title}</p>
            <p>Guide: {currentThesis.guide}</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="calendar-card">
          <div className="calendar-header">
            <h2 className="h4 mb-4">Calendar</h2>
          </div>
          <div className="calendar-body">
            <Calendar
              className="custom-calendar"
              tileContent={({ date, view }) =>
                view === 'month' && importantDates.some((d) => d.toDateString() === date.toDateString()) ? <div className="important-date-marker"></div> : null
              }
            />
          </div>
        </div>
      </div>

      {/* Thesis Progress Tracking Stepper */}
      <div className="card" style={{ maxWidth: '400px' }}>
        <div className="card-header">
          <h2 className="h4 mb-4">Progress Tracking</h2>
        </div>
        <div className="card-body">
          <ul className="stepper">
            {progressData.map((step, index) => (
              <li key={step.step} className={`step ${step.completed ? 'completed' : ''} ${index === progressData.length - 1 ? 'last-step' : ''}`}>
                {index > 0 && <div className="line"></div>}
                <div className="step-number">{step.step}</div>
                <div className="step-label">{step.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
