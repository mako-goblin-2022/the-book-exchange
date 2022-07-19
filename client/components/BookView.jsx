import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, Link, useNavigate } from 'react-router-dom'
import styles from '../styles/BookView.module.scss'
import { IfAuthenticated } from './Authenticated'

import {fetchBook, sendTransactionData } from '../actions/bookView'

export default function BookView() {
  const book = useSelector(state => state.book)
<<<<<<< HEAD

  //HARD CODE USER ID UNTIL AUTH IS LINKED
  const loggedinUser = 1

=======
>>>>>>> main
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  function handleClick(){
    const newOwnerId = loggedinUser
    const currentOwnerId = book.userId
    dispatch(sendTransactionData(id, newOwnerId, currentOwnerId))
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
            <p>Trader: {book.usersName} ||  Location: {book.usersLocation}</p>
          </div>
         
          <IfAuthenticated>
            {book.userId !== book.traderId &&
          <button onClick={handleClick} className='primary-button'>Request book</button>
            }
            {book.userId === book.traderId &&
            <button onClick={()=>navigate('/edit/'+book.id)} className='secondary-button'>Edit listing for {book.title}</button>}
          </IfAuthenticated>
      </div>
      <div className = 'back-button'>
        <Link to={'/'}>
        <button className='secondary-button'>Back</button>
        </Link>
      </div>
    </>
  )
}


