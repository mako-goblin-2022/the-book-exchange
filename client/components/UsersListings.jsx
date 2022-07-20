import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchBooks, fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

export default function UsersListings() {
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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profilecard}>
          <img src={profile.image} alt={profile.name} />
          <h2>
            <strong>{profile.name}</strong>
          </h2>
          <ul>
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
            <li>
              <strong>Favourite genre:</strong> {profile.favourite_genre}
            </li>
          </ul>
        </div>
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
    </>
  )
}
