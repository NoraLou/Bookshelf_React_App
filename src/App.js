import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { books: [] }
    this.updateBooks = this.updateBooks.bind(this)
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
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

  render() {
   return (
    <div className="app">
      <Route exact path="/" render={ () => (
       <BookShelf 
          books={this.state.books} 
          updateBooks={this.updateBooks}
        />
      )}/>

      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
      
    </div>
   )
  }

}

export default App

