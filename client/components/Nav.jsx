import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/Nav.module.scss'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'



function Nav() {


  // TODO: call the useAuth0 hook and destructure logout and loginWithRedirect
 const {logout,loginWithRedirect } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri:`${window.location.origin}/register` 
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleSubmit(e){

  }

  return (
    <>
      <div className={styles.topnav}>
        <NavLink to="/">Home</NavLink>
        <IfAuthenticated>
        <NavLink to="/profile/:id">
            My Profile
          </NavLink>
          <NavLink to="/" onClick={handleLogoff}>
            Log off
          </NavLink>
        </IfAuthenticated>
        <IfNotAuthenticated>
        <NavLink to ="/about">
            About
          </NavLink>
          <NavLink to ="/" onClick={handleRegister}>
            Register
          </NavLink>
          <NavLink to="/" onClick={handleSignIn}>
            Sign in
          </NavLink>
          <div className={styles.searchContainer}>
          <form className={styles.navform} onSubmit={handleSubmit}>
          <input type="text" placeholder="Search.." name="search"/>
          <button className={styles.formIcon}><img className={styles.imgsearch} src="/images/book.png" alt= "book"/></button>
          </form>
          </div>
          </IfNotAuthenticated>
        </div>
    </>
  )
}

export default Nav
