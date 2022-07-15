import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { fetchBooks } from '../actions/home'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const books = useSelector((state) => state.home)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchBooks())
  }, [])


  return (
    <>
      <h1>Browse books!</h1>
      <div className={styles.home}>
        {books.content &&
          books.content.map((book) => (
            <img className="book-cover" src={book.image} key={book.id} alt="Book" onMouseDown={() => navigate(/books/ + book.id)}/>
          ))}
      </div>
    </>
  )
}
