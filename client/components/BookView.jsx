import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, Link, useNavigate } from 'react-router-dom'
import styles from '../styles/BookView.module.scss'

import {fetchBook, updateBookStatus } from '../actions/bookView'

export default function BookView() {
  const book = useSelector(state => state.book)

  //HARD CODE USER ID UNTIL AUTH IS LINKED
  const loggedinUser = 1

  console.log(book)
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  function handleClick(e){
    const newOwnerId = loggedinUser
    const currentOwnerId = book.userId
    dispatch(updateBookStatus(id, newOwnerId, currentOwnerId))
    alert(`${book.title} is yours! Please contact ${book.usersName} at ${book.usersEmail} to arrange pickup`)
    navigate("/")
    
  }

  return (
    <>
      <div className = {styles.bookView}>
        <div className = {styles.imgContainer}>
        <img className = {styles.img} src={book.image} alt='book cover'/>
        </div>
          <div className = {styles.bookDetails}>
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p>Rating: {book.rating}</p>
            <p>Genre: {book.genre}</p>
            <p>Publishing details: {book.publishingDetails}</p>
            <p>Edition: {book.edition}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Summary: {book.summary}</p>
            <p>Condition: {book.condition}</p>
            <p>Trader: {book.usersName}</p>
          </div>
          <button onClick={handleClick}>Request book</button>
          <button>Edit listing for {book.title}</button>
      </div>
      <div className = 'back-button'>
        <Link to={'/'}>
        <button>Back</button>
        </Link>
      </div>
    </>
  )
}


