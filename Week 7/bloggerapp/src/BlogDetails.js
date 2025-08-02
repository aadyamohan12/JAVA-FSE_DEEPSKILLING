import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 101, title: "Why Learn React?", date: "2025-07-14" },
    { id: 102, title: "JSX vs HTML", date: "2025-07-10" },
    { id: 103, title: "React Hooks Explained", date: "2025-07-01" }
  ];

  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> - {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
