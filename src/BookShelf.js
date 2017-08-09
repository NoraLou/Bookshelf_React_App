import React, { Component } from 'react'


class BookShelf extends Component {

	shelves = [
    { title : 'Want To Read', status: 'wantToRead' },
    { title : 'Currently Reading', status: 'currentlyReading' },
    { title : 'Read', status: 'read' }
  ]

	state = {
		query:''
	}

	render () {

		const { books, updateBooks } = this.props

		return (
			<div className="list-books-content">
        {this.shelves.map((shelf) => (
          <div className="bookshelf" key={shelf.status}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Books 
                  books={ books.filter(b => b.shelf === shelf.status)}
                  updateBooks = { updateBooks }
                />
              </ol>
          </div>
        ))}
      </div>
    )
  }
}

export default BooksShelf



