import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addUser } from '../apis/api'
import { useNavigate } from 'react-router-dom'
//import styles from './Registration.module.css'

function Registration() {

  const navigate = useNavigate()

  const user = useSelector((state) => state.loggedInUser)

  const [formUserData, setFormUserData] = useState({
    auth0Id: '',
    name: '',
    location: '',
    email: '',
    favouriteGenre: '',
    image: '',
  })

  useEffect(() => {
    setFormUserData({
      ...formUserData,
      auth0Id: user?.auth0Id,
      token: user?.token,
      email: user?.email
    })
  }, [user])

  function handleInput(evt) {
    setFormUserData({
      ...formUserData,
      [evt.target.name]: evt.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('component', formUserData)
    await addUser(formUserData)
    navigate('/')
  }

  return (
    <div>
      {/* className={styles.registration}> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={formUserData.name}
          onChange={handleInput}
        ></input>
        <label htmlFor="location">Location: </label>
        <input
          id="location"
          name="location"
          value={formUserData.location}
          onChange={handleInput}
        ></input>
        <label htmlFor="favouriteGenre">favourite Genre: </label>
        <input
          id="favouriteGenre"
          name="favouriteGenre"
          value={formUserData.favouriteGenre}
          onChange={handleInput}
        ></input>
        <label htmlFor="image">Image URL: </label>
        <input
          id="image"
          name="image"
          value={formUserData.image}
          onChange={handleInput}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
