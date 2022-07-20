import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { fetchBooks, fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const FullState = useSelector((state) => {
    return state.profileReducer})

  const auth0Id = useSelector((state) => {
    return state.loggedInUser.auth0Id})

  useEffect(() => {
    if (auth0Id) {
      dispatch(fetchProfile(auth0Id))
      dispatch(fetchBooks(auth0Id))
    }
  }, [auth0Id])

  const profile = FullState.profile

  const chosenBooks = FullState.books

  const isNotDbUser = profile === null

  return (
    <>
    {isNotDbUser ?
    (navigate("/register/"))
    :(
      <div className={styles.container}>
        <img src={profile.image} alt={profile.name} />
        <h2>{profile.name}</h2>
        <h3>
          <strong>Location:</strong> {profile.location}
        </h3>
        <p>
          <strong>Favourite genre:</strong> {profile.favourite_genre}
        </p>
        <div className={styles.tokenContainer}>
          <img className={styles.tokenimg} src="/images/book.png" alt="book" />
          <div className={styles.caption}>
            <p>
              <strong>Book Token:</strong> {profile.trading_tokens}
            </p>
          </div>
        </div>
        <button onClick={() => navigate(`/${id}/add`)} className='primary-button'>Add New Book</button>
        <br></br>
        <div className={styles.row}>
          {chosenBooks.map((book) => (
            <div
              className={[styles.tokenContainer, styles.column]}
              key={book.id}
              onMouseDown={() => navigate('/books/' + book.id)}
              role="button"
              tabIndex={0}
            >


              <img
                className={styles.bookimg}
                src={book.image}
                alt={book.title}
              />
              <div className={styles.caption}>
                <p>{book.title + ' \n By: ' + book.author}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    )}
    </>
  )
}

export default Profile
