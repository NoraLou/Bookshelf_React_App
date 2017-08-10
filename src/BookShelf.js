import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'


class BookShelf extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {showSearchPage:false};
  // }


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

        <div className="open-search">
          <Link to="/search">
          </Link>
        </div> 

      </div>
    )//
  }
}

export default BookShelf



