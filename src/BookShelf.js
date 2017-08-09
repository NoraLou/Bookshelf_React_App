import React, { Component } from 'react'
import Shelf from './Shelf'


class BookShelf extends Component {

  shelves = [
    { title : 'Currently Reading', status: 'currentlyReading' },
    { title : 'Want To Read', status: 'wantToRead' },
    { title : 'Read', status: 'read' }
  ]

  render () {

    const { books, updateBooks } = this.props

    return (
      <div className="list-books-content">
        {this.shelves.map((shelf) => (
          <Shelf
            key={shelf.status} 
            title={shelf.title}
            books={ books.filter(b => b.shelf === shelf.status)}
            updateBooks={ updateBooks }
            />
        ))}
      </div>
    )
  }
}

export default BookShelf



