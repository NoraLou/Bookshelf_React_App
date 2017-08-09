import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

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

    // console.log('this.state', this.state)
    // const oldState = this.state.books
    // console.log('oldState :', oldState)

    // const newState = oldState.map(b => {
    //   if(b.id === book.id)
    //     b.shelf = shelf
    //     console.log("b :", b)
    // })





    // this.setState( state => ({
    //   books: state.map(b => {
    //     if(b.id === book.id)
    //       b.shelf = shelf
    //   })
    // }))




    // console.log('calling updateBooks with book : ', book)
    // console.log('all books :', books)

    // let changeIdx = book.id
    // let newState = oldState.map((b) => (
    //   if(b.id === changeIdx){
    //     b.shelf = shelf
    //     console.log("b")
    //   }
    // ))

    // this.setState( oldState )



    // get the book from your books array
    // change the shelf to the current shelf
    // update your state object
    // setState to the newState object
  

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