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
    <div className={styles.home}>
      <h1>Browse books!</h1>
      <div className={styles.booksList}>
        {books.content &&
          books.content.map((book) => (
            <div key={book.id} onMouseDown={() => navigate(/books/ + book.id)} role="button" tabIndex={0}> 
            <img className={styles.bookCover} src={book.image} key={book.id} alt="Book" />
            </div>
          ))}
      </div>
    </div>
  )
}
