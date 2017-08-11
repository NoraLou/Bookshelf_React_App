import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    books:  PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    getBookShelf: PropTypes.func.isRequired
  }

  shelves = [
    { title : 'Currently Reading', status: 'currentlyReading' },
    { title : 'Want To Read', status: 'wantToRead' },
    { title : 'Read', status: 'read' }
  ]

  componentDidMount() {
    this.props.getBookShelf()
  }

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
    )
  }
}

export default BookShelf



