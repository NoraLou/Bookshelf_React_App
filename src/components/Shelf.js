import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class Shelf extends Component {

  static propTypes = {
    books:  PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  } 

  render() {

    const { title, books, updateBooks } = this.props

    books.sort(sortBy('title'))
    
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