import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Amchard1 from '../Page/Amchard1/Amchard1'
import Amchard2 from '../Page/Amchard2/Amchard2'
import Home from '../Page/Home/Home'
import Categoria from '../Page/Categoria/Categoria'

// import Footer from '../components/Footer/Footer'



const Routing = () => {

    
    return (
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Amchard1" element={<Amchard1 />} />
        <Route path="/Amchard2" element={<Amchard2 />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
      {/* <Footer/> */}

      </>
    )
}

export default Routing