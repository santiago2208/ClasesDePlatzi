import { useState } from 'react'

import Routing from './routes/Rutas'
import { BrowserRouter as Router } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
 

  return (
    <Router>
      <Routing />
    </Router>
  )
}

export default App
