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
      console.log("get shelf books:", books)
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
      let currShelves;
      BooksAPI.search(query)
      .then((response) => {
        if (response.error) {
          this.setState({ books:[]})
        } else {
          //get current books on shelves.
          BooksAPI.getAll().then( books => {
            console.log("searchBooks :", books)
            currShelves = books
            console.log('insideAPI currShelves', currShelves)
          })
          console.log('outsideAPI currShelves', currShelves)
          let shelvedSearch = response.map(respItem => {
            let match = currShelves.find( book => book.id === respItem.id)
            let shelf = match ? match.shelf : "none"
            respItem.shelf = shelf
            return respItem
          })

          //update our search Selections with the current shelves.
          this.setState({ books:shelvedSearch } )
        }
      })
    } else {
      this.setState({ books: [] });
    } 
  }


  // searchBooks(query){
  //   if(query) {
  //     console.log('searchQuery :', query)
  //     BooksAPI.search(query)
  //     .then((resp) => {
  //       console.log('response from Search books:', resp)
  //       if (resp.error) {
  //         this.setState({ books:[]})
  //       } else {
  //         //get current books on shelves.
  //         BooksAPI.getAll().then( books => {
  //           books.forEach( b => {
  //             console.log("from search API call bookshelf :", b.title)
  //             //for each item on the bookshelf
  //             //see if it is in the search results
  //             let match = resp.find( r => r.id === b.id )
  //             //will return undefined if it is not there... 
  //             // if truthy
  //             if (match) {
  //               //assign our response item the corresponding shelf
  //               match.shelf = b.shelf
  //             }
  //           })

  //         })
  //         //update our search Selections with the current shelves.
  //         this.setState({ books:resp} )
  //       }
  //     })
  //   } else {
  //     this.setState({ books: [] });
  //   } 
  // }






















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

