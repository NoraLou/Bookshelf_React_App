import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    books:  PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }  

  state = {
  	query:'',
  }

  updateQuery = (value) => {
  	this.setState({query:value.trim()})
  	this.props.searchBooks(this.state.query)  		
  }

	render() {

		const { books, updateBook} = this.props
		const { query } = this.state

		return (

			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            	type="text" 
            	placeholder="Search by title or author"
            	value={query}
            	onChange={(event) => this.updateQuery(event.target.value)}
            	/>
          </div>
      	</div>

        { (query) && (
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  updateBook={updateBook}
                />
              ))}
            </ol>
          </div>
	      )}

      </div>
		)

	}
}

export default SearchBooks