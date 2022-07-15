import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addUser } from '../apis/api'
import styles from './Registration.module.css'

function Registration() {
  const user =  useSelector((state) => state.loggedInUser)
  const [formUserData, setFormUserData] = useState({
    auth0Id: '',
    name: '',
    location: '',
    bio: ''
  })
  
  useEffect(() => {
    setFormUserData({
      ...formUserData,
      auth0Id: user?.auth0Id,
      token: user?.token
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
    await addUser(formUserData)
  }

  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input 
          id='name' 
          name='name' 
          value={formUserData.name} 
          onChange={handleInput}
        ></input>
        <label htmlFor='location'>Location: </label>
        <input 
          id='location' 
          name='location' 
          value={formUserData.location}
          onChange={handleInput}
        ></input>
        <label htmlFor='bio'>Bio: </label>
        <input 
          id='bio' 
          name='bio'
          value={formUserData.bio} 
          onChange={handleInput}
        ></input>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Registration

