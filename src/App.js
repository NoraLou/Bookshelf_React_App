import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class App extends React.Component {
	state = {
		books: []
	}

	componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  updateBooks(book, shelf){
  	BooksAPI.update(book, shelf)
  }

	render() {
		return (
			<div className="app">
				<ListBooks books={this.state.books} 
					updateBooks={this.updateBooks}
					/>
			</div>
		)
	}
}

export default App