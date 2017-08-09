import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'


class BookShelf extends Component {

  constructor(props) {
    super(props);
    this.state = {showSearchPage:false};
  }


  shelves = [
    { title : 'Currently Reading', status: 'currentlyReading' },
    { title : 'Want To Read', status: 'wantToRead' },
    { title : 'Read', status: 'read' }
  ]

  render () {

    const { books, updateBooks } = this.props

    return (

      <div>
      {this.state.showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books-content">
          {this.shelves.map((shelf) => (
            <Shelf
              key={shelf.status} 
              title={shelf.title}
              books={ books.filter(b => b.shelf === shelf.status)}
              updateBooks={ updateBooks }
              />
          ))}
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  
    )//return 
  }
}

export default BookShelf



