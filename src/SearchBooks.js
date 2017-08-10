import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { : [] }
  // }	
  state = {
  	query:''
  }

  //state updating the search value in the input field
  updateQuery = (value) => {
  	this.setState({query:value.trim()})
  	if (this.state.query) {
  		this.props.searchBooks(this.state.query)  		
  	}
  }

  clearQuery = () => {
  	this.setState({query:''})
  }

	render() {

		const { books, updateBook} = this.props
		const { query } = this.state

		return (

			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" onClick={console.log('click')} to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            	type="text" 
            	placeholder="Search by title or author"
            	value={query}
            	onChange={(event) => this.updateQuery(event.target.value)}
            	/>
          </div>
      	</div>

      	{ (books.length && query) && (
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