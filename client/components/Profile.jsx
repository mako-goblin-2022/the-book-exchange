import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { fetchBooks, fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let { id } = useParams()
  //const { token } = useSelector((state) => state.user)
  const profile = useSelector((state) => {
    
    return state.profileReducer
  })

  console.log("profile",profile)
  useEffect(() => {
    // dispatch(fetchProfile(id))
    dispatch(fetchBooks(id))
  }, [])
  const chosenProfile = profile.profile
  const chosenBooks = profile.books

  return (
    <div className={styles.container}>
      <img src={profile.image} alt={profile.name} />
      <h2>{profile.name}</h2>
      <h3><strong>Location:</strong> {profile.location}</h3>
      <p><strong>Favoutite genre:</strong> {profile.favourite_genre}</p>
      <div className={styles.tokenContainer}>
        <img className={styles.tokenimg} src="/images/book.png" alt="book" />
        <div className={styles.caption}>
        <p><strong>Book Token:</strong> {profile.trading_tokens}</p>
      </div>
        
      </div>
      <div>
        {chosenBooks.map((book)=>{
          <div key={book.id}>
          <h3>Title: {book.title}</h3>
          <img className={styles.tokenimg} src={book.image} alt={book.title} />
        </div>
        }
          
        )}
      </div>
      <button onClick={()=>navigate('/books/add')} >Add New Book</button>
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
