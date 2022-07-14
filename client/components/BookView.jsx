import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, Link} from 'react-router-dom'

import {fetchBook} from '../actions/bookView'

export default function BookView() {
  const book = useSelector(state => state.book)
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  return (
    <>
      <div className = 'book-view'>
        <img src={book.image} alt='book cover'/>
          <ul>
            <li>Title: {book.title}</li>
            <li>Author: {book.author}</li>
            <li>Genre: {book.genre}</li>
            <li>Publishing details: {book.publishing_details}</li>
            <li>Edition: {book.edition}</li>
            <li>ISBN: {book.isbn}</li>
            <li>Summary: {book.summary}</li>
            <li>Condition: {book.condition}</li>
          </ul>
      </div>
      <div className = 'back-button'>
        <Link to={'/'}>
        <button>Back</button>
        </Link>
      </div>
    </>
  )
}
