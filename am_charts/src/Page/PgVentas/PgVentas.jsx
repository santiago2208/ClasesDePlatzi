import React, { useState, useEffect, useRef  } from 'react'

import { Link } from 'react-router-dom'

import'./Home.css'

import GraficoDeVentas from '../../components/Graficos.jsx/GraficoDeVentas/GraficoDeVentas'





function PgVentas() {
  

  return (
    <main>
       <h1>Total de Registros: </h1>

       <hr />

        <GraficoDeVentas></GraficoDeVentas>

      {/* Puedes agregar el contenedor para el gráfico de barras aquí */}

    </main>
  )
}

export default PgVentas