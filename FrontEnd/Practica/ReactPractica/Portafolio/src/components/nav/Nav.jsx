import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../firebase/Firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Firebase/Firebase';
import Logo from '../../assets/LogoPortafolio2.png'
import Icon_Cerrar from '../../assets/img/iconos/cerrar.png' 
import Icon_Menu from '../../assets/img/iconos/menu.png' 


import'./nav.css'



function Nav() {

  const [Modal_Menu, setModal_Menu] = useState(false);

  const Toggle_NavMenu = () => {
    setModal_Menu(!Modal_Menu);
  };

  // const menuItems = [
  //   { text: 'Home', url: '/' },
  //   { text: 'Sobre mi', url: '/about' },
  //   { text: 'Interaccion', url: '/interaction' },
  // ];

  const handleDescargar = async () => {
    try {
      const storageRef = ref(storage, 'gs://portafolio-santiago.appspot.com/Santiago_Alvarez_porras.pdf'); // Reemplaza con la ruta correcta a tu archivo en Firebase Storage
      const url = await getDownloadURL(storageRef);
      window.open(url, '_blank'); // Abre una nueva pestaña para descargar el archivo
    } catch (error) {
      console.error('Error al descargar el archivo', error);
    }
  };



  return (
    <header className='header'>
      
      <nav className='nav'>
        <Link to='/' className='nav_ContLogo nav_ContLogo--Hover'> 
            <img src={Logo}className='nav__Logo' alt="Logo del sitio web" />
            <p className='nav_TextLogo'>Portafolio</p>
        </Link>

        <div className='nav__ContMenu'>
          <img onClick={Toggle_NavMenu} src={Icon_Menu} alt="" className='nav__IconMenuMovil'/>
          
          <Link to={'/Api1'} className='nav__MenuOpcionPC nav__MenuOpcionPC--hover'>Practica</Link>
          <Link onClick={handleDescargar}  className='nav__MenuOpcionPC nav__MenuOpcionPC--hover'>Ver hoja de vida</Link>

          {/* <Link className='nav__MenuOpcionPC nav__MenuOpcionPC--hover'>Interaccion</Link> */}
          
          {/* Mapea sobre el array y genera dinámicamente las etiquetas Link */}
          {/* {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className='nav__MenuOpcionPC nav__MenuOpcionPC--hover'
            >
              {item.text}
              
            </Link>
          ))} */}
        </div>
      </nav>

      <div className={Modal_Menu ? 'nav__MenuOpcionMovil':'ocultar'}>
        Ver hoja de vida
      </div>
        
    </header>
  )
}

export default Nav