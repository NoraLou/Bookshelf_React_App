import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class App extends React.Component {
	state = {
		books: [],
    query: ''
	}

	componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  updateBooks(book, shelf){
  	BooksAPI.update(book, shelf)
    // BooksAPI.getAll().then((books) =>{
    //   this.setState({books})
    // })
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