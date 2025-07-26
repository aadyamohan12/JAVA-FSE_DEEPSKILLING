import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: 'C101',
      technology: 'ReactJS',
      startDate: '2025-07-01',
      currentStatus: 'ongoing',
      coachName: 'Alex Johnson',
      trainerName: 'Priya Kumar'
    },
    {
      cohortCode: 'C102',
      technology: 'Angular',
      startDate: '2025-06-15',
      currentStatus: 'completed',
      coachName: 'Samantha Roy',
      trainerName: 'Raj Mehra'
    },
    {
      cohortCode: 'C103',
      technology: 'VueJS',
      startDate: '2025-06-25',
      currentStatus: 'ongoing',
      coachName: 'Martin King',
      trainerName: 'Sneha Singh'
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
