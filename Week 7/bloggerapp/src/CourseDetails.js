import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'C1', name: "React Basics", duration: "4 weeks" },
    { id: 'C2', name: "Advanced JS", duration: "6 weeks" }
  ];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
