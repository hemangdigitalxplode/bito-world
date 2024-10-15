/* eslint-disable no-unused-vars */
import React from 'react'
import AllRoutes from './Routes/AllRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App