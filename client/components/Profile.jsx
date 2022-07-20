import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchBooks, fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const FullState = useSelector((state) => {
    return state.profileReducer
  })

  const id = params.id

  useEffect(() => {
    dispatch(fetchProfile(id))
  }, [])

  useEffect(() => {
    dispatch(fetchBooks(id))
  }, [])

  const profile = FullState.profile

  const chosenBooks = FullState.books

  const isNotDbUser = profile === null

  return (
    <>
      {isNotDbUser ? (
        navigate('/register/')
      ) : (
        <div className={styles.container}>
          <div className={styles.profilecard}>
            <img src={profile.image} alt={profile.name} />
            <h2>{profile.name}</h2>

            <h3>
              <strong>Location:</strong> {profile.location}
            </h3>
            <ul>
              <li>
                <strong>Favourite genre:</strong> {profile.favourite_genre}
              </li>
              <li>
                <strong>Book Token:</strong> {profile.trading_tokens}
              </li>
            </ul>
            <button
              onClick={() => navigate(`/${id}/add`)}
              className="primary-button"
            >
              Add New Book
            </button>
          </div>

          <br></br>
          <div className={styles.row}>
            {chosenBooks.map((book) => (
              <div
                className={styles.tokenContainer}
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
