import React, { Component } from 'react'


class Book extends Component {
 
  render() {

    const { book, updateBook } = this.props
    
    return (
      <li key={book.id}> 
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ' '})`    }}></div>
              <div className="book-shelf-changer">
                <select onChange={(event) => updateBook( book, event.target.value) } value={book.shelf}>
                  <option value="none" disabled> Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
          </div>
        </div> 
      </li>
    )
  }
}

export default Book
