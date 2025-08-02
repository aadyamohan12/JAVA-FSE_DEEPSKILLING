import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy & Dave" }
  ];

  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
