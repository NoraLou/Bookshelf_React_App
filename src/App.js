import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { books: [] }
    this.updateBooks = this.updateBooks.bind(this)
  }

  state = {books:[]}

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log("books :", books)
    })
  }

  updateBooks(bookChange, shelfChange) {
    BooksAPI.update(bookChange, shelfChange)
      .then(() => {
        let currState = this.state
        this.setState( (currState) => ({
          books: currState.books.map(b => {
            if(bookChange.id === b.id){
              b.shelf = shelfChange
            }
            return b;
          })
        }));
    });
  }

  searchBooks(query){
    console.log('searchQuery :', query)
    BooksAPI.search(query)
    .then((data) => {
      let currState = this.state
      console.log('searchData:', data )
      this.setState({books:data})
    })
  }

  render() {
   return (
    <div className="app">

      <Route path="/search" render={ ()=> (
        <SearchBooks
          books={this.state.books}
          updateBook={this.updateBooks}
          searchBooks={this.searchBooks}
        />
        )}>
      </Route>

      <Route exact path="/" render={ () => (
       <BookShelf 
          books={this.state.books} 
          updateBooks={this.updateBooks}
        />
      )}/>
    </div>
   )
  }

}

export default App

