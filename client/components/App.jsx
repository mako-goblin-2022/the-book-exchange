import { Routes, Route} from 'react-router-dom'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import BookView from './BookView'


function App() {
  return (
    <>
     <Header />
      <section className="main">
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/profile/:id'} element={<Profile />} />    
          <Route path={'/books/:id'} element={<BookView />} />
        </Routes>
        
      </section>
      <Footer />
    </>
  )
}

export default App


