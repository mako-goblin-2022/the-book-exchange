import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <section className="main">
        <Header />
        <Routes>
          <Route path={'/profile/:id'} element={<Profile />} />
        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App
