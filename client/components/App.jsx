import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import BookView from './BookView'

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import Registration from './Register'

function App() {
  cacheUser(useAuth0)
  return (
    <>
      <section className="main">
        <Header />
        <Routes>
          <Route path="books/:id" element={<BookView />} />
        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App
