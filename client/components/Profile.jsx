import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

function Profile() {
  const dispatch = useDispatch()
  let { id } = useParams()
  //const { token } = useSelector((state) => state.user)
  const profile = useSelector((state) => {
    return state.profileReducer
  })

  console.log(profile)
  useEffect(() => {
    dispatch(fetchProfile(id))
  }, [])

  return (
    <div className={styles.container}>
      <img src={profile.image} alt={profile.name} />
      <h2>{profile.name}</h2>
      <h3><strong>Location:</strong> {profile.location}</h3>
      <p><strong>Favoutite genre:</strong> {profile.favourite_genre}</p>
      <div className={styles.bob}>
        <img className={styles.tokenimg} src="/images/book.png" alt="book" />
        <div className={styles.caption}>
        <p><strong>Book Token:</strong> {profile.trading_tokens}</p>
        </div>
        
      </div>
    </div>
  )
}
// id: 1,
// name: 'Anette',
// location: 'Mars',
// favourite_genre: 'Animation|Drama',
// trading_tokens: 1,
// email: 'aswancott0@blogtalkradio.com',
// image:

export default Profile
