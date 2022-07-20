import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/Nav.module.scss'
import {useDispatch} from 'react-redux'

import { searchBooks } from '../actions/home'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {

  const { logout, loginWithRedirect } = useAuth0()
  
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(searchBooks(search))
    setSearch('')
  }

  return (
    <>
      <div className={styles.topnav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <div className={styles.searchContainer}>
          <form className={styles.navform} onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." name="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <button className={styles.formIcon}>
              <img
                className={styles.imgsearch}
                src="/images/book.png"
                alt="book"
              />
            </button>
          </form>
        </div>
        <IfAuthenticated>
          <NavLink to={`/profile`}>My Profile</NavLink>
          <NavLink to="/" onClick={handleLogoff}>
            Log off
          </NavLink>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink to="/" onClick={handleRegister}>
            Register
          </NavLink>
          <NavLink to="/" onClick={handleSignIn}>
            Sign in
          </NavLink>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
