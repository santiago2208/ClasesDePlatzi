import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import'./CardCategoria.css'






function CardCategoria() {


  return (
    <div className='CardCategoria'>
      <h2 className='CardCategoria_Titulo'>Titulo </h2>

      <div className='CardCategoria_Main'>
        <img src="https://www.camiseriaeuropea.com/cdn/shop/products/DSC00807.jpg?v=1673382512" className='CardCategoria_img' alt="" />
      </div>

      <div className='CardCategoria_footer'>
        <Link className='CardCategoria_link Boton_Azul'>Ver mas</Link>
      </div>
      
    </div>
  )
}

export default CardCategoria