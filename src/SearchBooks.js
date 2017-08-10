import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {


  state = {
  	query:'',
  	searchBooks:[]
  }

  searchBooks(query){
    console.log('searchQuery :', query)
    BooksAPI.search(query)
    .then((data) => {
    	if (data.error) {
    		this.setState({searchBooks:[]})
    		return false
    	} else {
    		if (data.length) {
    			this.setState({searchBooks:data})
    		}
    	}
    })
    console.log('this.state', this.state)
  }

  //state updating the search value in the input field
  updateQuery = (value) => {
  	this.setState({query:value.trim()})
  	if (this.state.query) {
  		this.searchBooks(this.state.query)  		
  	}
  }

  // clearQuery = () => {
  // 	this.setState({query:''})
  // }

	render() {

		const { books, updateBook} = this.props
		const { query } = this.state
		const { searchBooks } = this.state

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

      	{(query && searchBooks.length) && (
	        <div className="search-books-results">
	          <ol className="books-grid">
	            {searchBooks.map((book) => (
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