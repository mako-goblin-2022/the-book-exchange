import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, Link, useNavigate } from 'react-router-dom'
import styles from '../styles/BookView.module.scss'

import {fetchBook, updateBookStatus } from '../actions/bookView'

export default function BookView() {
  const book = useSelector(state => state.book)
  // const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  function handleClick(e){
    dispatch(updateBookStatus(id))
    alert('The book is yours!')
    // navigate(-1)

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
            <p>Genre: {book.genre}</p>
            <p>Publishing details: {book.publishing_details}</p>
            <p>Edition: {book.edition}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Summary: {book.summary}</p>
            <p>Condition: {book.condition}</p>
            <p>Status: {book.status}</p>
          </div>
          <button onClick={handleClick}>Request book</button>
      </div>
      <div className = 'back-button'>
        <Link to={'/'}>
        <button>Back</button>
        </Link>
      </div>
    </>
  )
}


// request book button with onClick
// when clicked, update book status from active to inactive
//1. db function to update boolean
//2. route ?? probably not
//3. api call - requestBook (update status via this function)
//4. 


// if inactive, book needs to disappear from home view - liaise with Tim and Mandy to only getbookas that are active 

// pop up message : congrats, book is yours...


// increment/decrement book token

