import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CerrarModal from '../../assets/Iconos/Cerrar.png'
import IconGoogle from '../../assets/Iconos/IconoGoogle.png'

import'./Login.css'






function Login({CloseModLogin }) {



  return (
 
      <div className='FondoModal' >
      <div className='ModalLogin'>
        <div className='ModalLogin_Header'>
          <h2 className='ModalLogin_Title'>Iniciar sesion</h2>
          <img src={CerrarModal} className='ModalLogin_IconClose' onClick={CloseModLogin} alt="Icono Cerrar ❌" />
        </div>
        <div className='ModalLogin_Main'>

          <input type="text" 
          className='ModalLogin_input'
          placeholder='Correo'/>

          <input type="password" 
          className='ModalLogin_input'
          placeholder='Contraseña'/>

          <div className='Boton_Azul ModalLogin_BtnLogin'>
            Iniciar sesion
          </div>
          

          <div className='SeparadorLogin'>
            <p className='SeparadorLogin_Text'>¿Olvidastes tu contraseña?</p>
            <div className='Separador SeparadorLogin_Linea'></div>
          </div>

          <div className='BtnLogGoogle'>
            <img src={IconGoogle} className='BtnLogGoogle_img' alt="" />
            <p className='BtnLogGoogle_Text'>Iniciar sesion con google</p>
          </div>
          


        </div>


        
      </div>
  </div>
   
    

    
  )
}

export default Login