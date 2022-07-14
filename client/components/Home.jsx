import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../actions/home'

export default function Home() {
  const books = useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  console.log(books)

  return (
    <>
      <h1>Hi</h1>
      <div>
        {books.content &&
          books.content.map((book) => <li key={book.id}>{book.title}</li>)}
      </div>
    </>
  )
}
