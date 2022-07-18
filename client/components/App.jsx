import { Routes, Route} from 'react-router-dom'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import BookView from './BookView'
import EditBook from './EditBook'
import AddBook from './AddBook'


function App() {
  return (
    <>
     <Header />
      <section className="main">
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'/profile/:id'} element={<Profile />} />    
          <Route path={'/books/:id'} element={<BookView />} />
          <Route path={'/edit/:id'} element={<EditBook />}/>
          <Route path={'/add'} element={<AddBook />} />
        </Routes>
        
      </section>
      <Footer />
    </>
  )
}

export default App


