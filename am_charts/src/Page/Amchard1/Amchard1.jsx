import React, { useState, useEffect, useRef  } from 'react'

import { Link } from 'react-router-dom'
import  Autos  from '../../json/Autos'

import'./Home.css'

import Chart from './Chart';






function Amchard1() {
  



  return (
    <main>
       <h1>Total de Registros: </h1>

       <hr />

       <Chart />

      {/* Puedes agregar el contenedor para el gráfico de barras aquí */}

    </main>
  )
}

export default Amchard1