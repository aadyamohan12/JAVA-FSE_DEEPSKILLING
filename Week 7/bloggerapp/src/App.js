import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState("book");

  const renderComponent = () => {
    if (activeComponent === "book") {
      return <BookDetails />;
    } else if (activeComponent === "blog") {
      return <BlogDetails />;
    } else if (activeComponent === "course") {
      return <CourseDetails />;
    } else {
      return <p>Please select a component.</p>;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧠 Blogger App</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveComponent("book")}>Show Books</button>
        <button onClick={() => setActiveComponent("blog")}>Show Blogs</button>
        <button onClick={() => setActiveComponent("course")}>Show Courses</button>
      </div>

      {renderComponent()}

      <p>
        Current view:{" "}
        {activeComponent === "book"
          ? "BookDetails"
          : activeComponent === "blog"
          ? "BlogDetails"
          : "CourseDetails"}
      </p>

      {activeComponent === "course" && (
        <p>You're currently viewing available courses.</p>
      )}
    </div>
  );
}

export default App;
