import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Nav from '../components/nav/Nav'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import Api1 from '../pages/Api1/Api1'



//se crea un comentario

const Routing = () => {

    
    return (
      <>
      <Nav />
      <Routes>
        <Route path="/Api1" element={<Api1 />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>

      </>
    )
}

export default Routing