import React from 'react'
import {useSelector} from 'react-redux'
import {useParams, Link} from 'react-router-dom'

export default function BookView() {
  const books = useSelector(state => state.books)
  const {id} = useParams()
  const book = books.find((book) => id == book.id)

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
