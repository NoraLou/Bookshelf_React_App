import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class App extends React.Component {
	state = {
		books: []
	}

	componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log("books :", books)
      this.state = { books }
      this.setState({books})
    })
  }

  updateBooks(book, shelf){
  	BooksAPI.update(book, shelf)
    const { books } = this.state
    console.log('calling updateBooks with book : ', book)
    console.log('all books :', books)

    // let bookId = book.id
    // state.books.forEach( (b, bookIdx) => {
    //   console.log(b.title)
    //   console.log("searchIdx :", bookId)
    // })

    // get the book from your books array
    // change the shelf to the current shelf
    // update your state object
    // setState to the newState object


  }

	render() {
		return (
			<div className="app">
				<BookShelf 
          books={this.state.books} 
					updateBooks={this.updateBooks}
					/>
			</div>
		)
	}
}

export default App