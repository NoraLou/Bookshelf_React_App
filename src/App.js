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
      console.log("response from GET BOOK SHELF : ", books)
      this.setState({books})
      // console.log("books :", books)
    })
  }

  state = {books:[]}

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
    if(query) {
      console.log('searchQuery :', query)
      BooksAPI.search(query)
      .then((resp) => {
        console.log('response from Search books:', resp)
        if (resp.error) {
          this.setState({ books:[]})
        } else {
          this.setState({ books:resp} )
        }
      })
    } else {
      this.setState({ books: [] });
    } 
  }

  // searchBooks={this.searchBooks}

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

