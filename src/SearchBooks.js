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
  	this.props.searchBooks(this.state.query)
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

        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>

      </div>
		)

	}
}

export default SearchBooks