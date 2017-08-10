import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.getBookShelf = this.getBookShelf.bind(this)
    this.updateBooks = this.updateBooks.bind(this)
    this.searchBooks = this.searchBooks.bind(this)
  }

  
  getBookShelf() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  state = {books:[]}

  updateBooks(bookChange, shelfChange) {
    BooksAPI.update(bookChange, shelfChange)
      .then(() => {
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
    if(query) {
      BooksAPI.search(query)
      .then((response) => {
        if (response.error) {
          this.setState({ books:[]})
        } else {
          BooksAPI.getAll().then( books => {
            let shelvedSearch = response.map(respItem => {
              let match = books.find( book => book.id === respItem.id)
              let shelf = match ? match.shelf : "none"
              respItem.shelf = shelf
              return respItem
            })
            this.setState({ books:shelvedSearch } )
          })
        }
      })
    } else {
      this.setState({ books: [] });
    } 
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
          getBookShelf={this.getBookShelf}
        />
      )}/>
    </div>
   )
   
  }
}

export default App

