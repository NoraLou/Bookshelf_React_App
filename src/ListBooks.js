import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'


class ListBooks extends Component {

	shelves = ['wantToReadShelf']

	state = {
		query:''
	}

	render () {

		const { books } = this.props

		console.log('books :', books)

		let wantToReadShelf
		 // currentlyReadingShelf, readShelf;

		wantToReadShelf = books.filter( b => b.shelf === 'wantToRead')

		console.log('wantToReadShelf', wantToReadShelf)

		return (
			<div>
				{wantToReadShelf.map((book) => (
						<h2 key={book.id}>
							{book.title}
						</h2>
				))}
			</div>
		)



	}

}

export default ListBooks



//1 list all books

//2 list books by the shelves they are on... 

