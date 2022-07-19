import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import BookView from './BookView'
import Nav from './Nav'
import Registration from './Registration'
import About from './About'
import EditBook from './EditBook'
import AddBook from './AddBook'
import UsersListings from "./UsersListings"

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  cacheUser(useAuth0)
  return (
    <>
      
      <section className="main">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/userslistings/:id" element={<UsersListings />} />
          <Route path={'/profile/:id'} element={<Profile />} />
          <Route path={'/books/:id'} element={<BookView />} />
          <Route path={'/edit/:id'} element={<EditBook />}/>
          <Route path={'/:id/add'} element={<AddBook />} />
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
