import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

import styles from '../styles/BookView.module.scss'
import { IfAuthenticated } from './Authenticated'
import { fetchBook, sendTransactionData } from '../actions/bookView'
Modal.setAppElement('#app')
export default function BookView() {
  const book = useSelector((state) => state.book)
  useEffect(() => {
    dispatch(fetchBook(id))
  }, [])

  const user = useSelector((state) => state.loggedInUser)
  const tokens = useSelector(
    (state) => state.profileReducer.profile.trading_tokens
  )

  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()

  let subtitle
  const [modelIsOpen, setIsOpen] = useState(false)
  const [noTokenOpen, setnoTokenOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function openTokenModal(){
    setnoTokenOpen(true)
  }
  function closeTokenModal(){
    setnoTokenOpen(false)
  }

  

  function closeModal() {
    setIsOpen(false)
    navigate("/")
  }

  function handleClick() {
    const newOwnerId = user.auth0Id
    const currentOwnerId = book.userId
    if (tokens <= 0) {
    
      openTokenModal()
    } else {
      dispatch(sendTransactionData(id, newOwnerId, currentOwnerId))
      //  alert(`${book.title} is yours! Please contact ${book.usersName} at ${book.usersEmail} to arrange pickup`)
      openModal()

      //
    }
  }

  return (
    <>
      <div className={styles.bookView}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={book.image} alt="book cover" />
        </div>
        <div className={styles.bookDetails}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <p>Rating: {book.rating}</p>
          <p>Genre: {book.genre}</p>
          <p>Publishing details: {book.publishingDetails}</p>
          <p>Edition: {book.edition}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Summary: {book.summary}</p>
          <p>Condition: {book.condition}</p>
          <p>
            Trader:{' '}
            <Link to={`/userslistings/${book.traderId}`}>{book.usersName}</Link>
            <span> || Location: {book.usersLocation}</span>
          </p>
        </div>

        <IfAuthenticated>
          {book.userId !== book.traderId && (
            <button onClick={handleClick} className="primary-button">
              Request book
            </button>
          )}
          {book.userId === book.traderId && (
            <button
              onClick={() => navigate('/edit/' + book.id)}
              className="secondary-button"
            >
              Edit listing for {book.title}
            </button>
          )}
          <Modal
            isOpen={modelIsOpen}
            onRequestClose={closeModal}
            className="Modal"
        
            contentLabel="RequestBook"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{`${book.title} is yours!` }</h2>
            
            <div className='content'>
              {`Please contact ${book.usersName} at ${book.usersEmail} to arrange pickup`}
            </div>
            <button className='primary-button' onClick={closeModal}>close</button>
          </Modal>
          <Modal
      isOpen={noTokenOpen}
      onRequestClose={closeTokenModal}
      className="Modal"
  
      contentLabel="RequestBook"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{'oh No!'}</h2>
      
      <div className='content'>
      {'It looks like you have run out of tokens. Head over to our about page to learn about tokens so you can get your swap on!'}
      
      </div>
      <button className='primary-button' onClick={closeTokenModal}>close</button>
    </Modal>
        </IfAuthenticated>
      </div>
      <div className="back-button">
        <Link to={'/'}>
          <button className="secondary-button">Back</button>
        </Link>
      </div>
    </>
  )
}
