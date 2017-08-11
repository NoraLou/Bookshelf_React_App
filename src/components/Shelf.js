import React, { Component } from 'react'
import Book from './Book'


class Shelf extends Component {

  render() {

    const { status, title, books, updateBooks } = this.props

    return (
      <div className="bookshelf" key={status}>
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                updateBook={updateBooks}
              />
            ))}
          </ol>
        </div>
      </div>    
    )
  }
}

export default Shelf