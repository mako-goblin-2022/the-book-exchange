import { Routes, Route} from 'react-router-dom'

import React from 'react'

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import Nav from "./Nav"
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import BookView from './BookView'
import Registration from "./Registration"
import About from "./About"


function App() {
  cacheUser(useAuth0)
  return (
    <>
      <section className="main">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path={'/profile/:id'} element={<Profile />} />    
          <Route path={'/books/:id'} element={<BookView />} />
        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App


