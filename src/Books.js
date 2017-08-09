import React, { Component } from 'react'

//TODO refactor a componont that is rowBooks.
//TODO refactor a componant this is a single book.



class Books extends Component {

  //loop over array to make the select boxes ?
  availSelectOptions = [
    {value: "currentlyReading", label: "Currently Reading" }, 
    {value: "wantToRead", label: "Want To Read"},
    {value: "read", label: "Read"},
    {value: "none", label: "None"} 
  ] 

  render() {
    const { books, updateBooks } = this.props

    return (

      <ol className="books-grid">
        {books.map ((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(event) => updateBooks( book, event.target.value) }  value={book.shelf}>
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
        ))}
      </ol>

    )
  }
}

export default Books