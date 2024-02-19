import React, { useState, useEffect, useRef  } from 'react'
import { Link } from 'react-router-dom'

import'./Home.css'


import OtrosGraf_Autos from '../../components/OtrosGraf/OtrosGraf_Autos'
import OtrosGraf_Autos2 from '../../components/OtrosGraf/OtrosGraf_Autos2'
import OtrosGraf_Pruebas from '../../components/OtrosGraf/OtrosGraf_Pruebas'
import OtrosGraf_Ventas from '../../components/OtrosGraf/OtrosGraf_Ventas'



function PgOtrosGraf() {

  

  return (
    <main className='MainGraficos'>
       
        <OtrosGraf_Pruebas/>
        <OtrosGraf_Autos2/>
        <OtrosGraf_Autos/>
        <OtrosGraf_Ventas/>
        
    </main>
  )
}

export default PgOtrosGraf