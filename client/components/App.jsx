import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import BookView from './BookView'
import Nav from './Nav'
import Registration from './Registration'

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
          <Route path="books/:id" element={<BookView />} />
          <Route path="register" element={<Registration />} />
        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App
