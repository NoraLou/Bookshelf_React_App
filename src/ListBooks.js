import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

//TODO
// refactor Book item from Shelves
// refactor Shelvs loop over shelf
// map over authors 


class ListBooks extends Component {

	shelves = ['wantToReadShelf']

	state = {
		query:''
	}

	render () {

		const { books, updateBooks } = this.props
		
		let currentlyReading= books.filter( b => b.shelf === 'currentlyReading')
		let wantToRead = books.filter(b => b.shelf === 'wantToRead')
		let read = books.filter(b => b.shelf === 'read')

		return (

			<div className="list-books-content">
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
					<ol className="books-grid">
						{currentlyReading.map((book) => (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} ></div>
	                  <div className="book-shelf-changer">
	                    <select onChange={(event) => updateBooks( book, event.target.value) }>
	                      <option value="none" disabled>Move to...</option>
	                      <option value="currentlyReading" defaultValue>Currently Reading</option>
	                      <option value="wantToRead">Want to Read</option>
	                      <option value="read">Read</option>
	                      <option value="none">None</option>
	                    </select>
	                  </div>
                  </div>
                	<div className="book-title">{ book.title }</div>
                	<div className="book-authors">{ book.authors[0] }</div>
								</div>
							</li>
						))}
					</ol>
					</div>
				</div>

				<div className="bookshelf">
					<h2 className="bookshelf-title">Want to Read</h2>
					<div className="bookshelf-books">
					<ol className="books-grid">
						{wantToRead.map((book) => (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} ></div>
	                  <div className="book-shelf-changer">
	                 

                      <select onChange={(event) => updateBooks( book, event.target.value) }>	                    
	                      <option value="none" disabled>Move to...</option>
	                      <option value="currentlyReading">Currently Reading</option>
	                      <option value="wantToRead" defaultValue>Want to Read</option>
	                      <option value="read">Read</option>
	                      <option value="none">None</option>
	                    </select>

	                  </div>
                  </div>
                	<div className="book-title">{ book.title }</div>
                	<div className="book-authors">{ book.authors[0] }</div>
								</div>
							</li>
						))}
					</ol>
					</div>
				</div>

				<div className="bookshelf">
					<h2 className="bookshelf-title">Read</h2>
					<div className="bookshelf-books">
					<ol className="books-grid">
						{read.map((book) => (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} ></div>
	                  <div className="book-shelf-changer">
	                    
	                    <select onChange={(event) => updateBooks( book, event.target.value) }>
	                      <option value="none" disabled>Move to...</option>
	                      <option value="currentlyReading">Currently Reading</option>
	                      <option value="wantToRead">Want to Read</option>
	                      <option value="read" defaultValue>Read</option>
	                      <option value="none">None</option>
	                    </select>
	                  </div>
                  </div>
                	<div className="book-title">{ book.title }</div>
                	<div className="book-authors">{ book.authors[0] }</div>
								</div>
							</li>
						))}
					</ol>
					</div>
				</div>				
			</div>

		)



	}

}

export default ListBooks



