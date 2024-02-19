import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/LogoPortafolio2.png'

import Icon_correo from '../../assets/img/footer/Icon_correo.png'
import icon_instagram from '../../assets/img/footer/icon_instagram.png'
import icon_linkedin from '../../assets/img/footer/icon_linkedin.png'
import Icon_telefono from '../../assets/img/footer/Icon_telefono.png'
import Icon_github from '../../assets/img/footer/Icon_github.png'



import'./Footer.css'



function Nav() {

  return (
    <footer className='Footer'>
       <div className='Footer__Cont'>
          <div className='Footer__element'>
            <Link to={'https://www.instagram.com/gemelo_santi/'} className='Footer__info' title='Instagram'>
              <img className='Footer__Icon' src={icon_instagram} alt="icono de instagram" />
              <p className='Footer__Text'>gemelo_santi</p>
            </Link>

            <Link to={'https://www.linkedin.com/in/santiago-alvarez-porras-b49888197/'} className='Footer__info' title='Linkedin'>
              <img className='Footer__Icon' src={icon_linkedin} alt="icono de likedin" />
              <p className='Footer__Text'>Santiago Alvarez Porras</p>
            </Link>
          </div>
          
          <div className='Footer__element'>
            <div className='Footer__info' title='Celular'>
              <img className='Footer__Icon' src={Icon_telefono} alt="icono de telefono" />
              <p className='Footer__Text'>+57 3195584703</p>
            </div>

            <div className='Footer__info' title='Correo electronico'>
              <img className='Footer__Icon' src={Icon_correo} alt="icono de correo electronico" />
              <p className='Footer__Text'>santiagoalvarezporras@gmail.com</p>
            </div>
          </div>
          <div className='Footer__element'>
            <Link to={'https://github.com/santiago2208'} className='Footer__info' title='GitHub'>
              <img className='Footer__Icon' src={Icon_github} alt="icono de github" />
              <p className='Footer__Text'>santiago2208</p>
            </Link>


            
          </div>
       </div>
    </footer>
  )
}

export default Nav