import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { fetchBooks, fetchProfile } from '../actions/profile'
import styles from '../styles/Profile.module.scss'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let { id } = useParams()

  // const [loading, setLoading] = useState(true)
  //const { token } = useSelector((state) => state.user)
  const FullState = useSelector((state) => {
    
    return state.profileReducer
  })

  //console.log("full state",FullState)
  useEffect(() => {
     dispatch(fetchProfile(id))
  }, [])

  useEffect(()=>{
    dispatch(fetchBooks(id))
  },[])
  const profile = FullState.profile
  //console.log("chosen",chosenProfile)
  const chosenBooks = FullState.books
  console.log(chosenBooks)

  return (
<>

    <div className={styles.container}>
      <img src={profile.image} alt={profile.name} />
      <h2>{profile.name}</h2>
      <h3><strong>Location:</strong> {profile.location}</h3>
      <p><strong>Favourite genre:</strong> {profile.favourite_genre}</p>
      <div className={styles.tokenContainer}>
        <img className={styles.tokenimg} src="/images/book.png" alt="book" />
        <div className={styles.caption}>
        <p><strong>Book Token:</strong> {profile.trading_tokens}</p>
      </div>
        
      </div>
      <div className={styles.row}>
        {chosenBooks.map((book)=>(
          //console.log(book.id)
          <div className={[styles.tokenContainer, styles.column]} key={book.id}>
            
          
          <img className={styles.bookimg} src={book.image} alt={book.title} />
          <div className={styles.caption}>
            <p >{book.title+' \n By:'+ book.author}</p>
          
            </div>
        </div>)
        
          
        )}
      </div>
      <button onClick={()=>navigate('/books/add')} >Add New Book</button>
    </div>
  </>
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
