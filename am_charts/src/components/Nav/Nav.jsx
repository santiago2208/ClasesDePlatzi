import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Iconos/logo.png'
import Menu from '../../assets/Iconos/menu.png'
import CerrarMenu from '../../assets/Iconos/Cerrar.png'
import Avatar from '../../assets/Iconos/avatar.png'
import ArrowUp from '../../assets/Iconos/arrowUp.png'
import'./Nav.css'

import Login from '../../components/Login/Login'



function Nav() {

  const [MenuMovil, setMenuMovil] = useState(null);
  const [ContOptions1, setContOptions1] = useState(true);

  const [ModalLogin, setModalLogin] = useState(false);

  const OpenModLogin = () => {
    setModalLogin(true);
  };

  const CloseModLogin = () => {
    setModalLogin(false);
  };



  const ShowMenu = () => {
    setMenuMovil(!MenuMovil);
  };

  const ShowOptions1 = () => {
    setContOptions1(!ContOptions1);
  };


  return (
    <nav className='nav'>

      <div className='nav__Cont'>
        <Link to={'/'}>
            <img src={Logo} className='nav__logo' alt="Logo de la pagina" />
        </Link>

        <div className='nav__IconMenu' onClick={ShowMenu}>
            <img src={Menu} className='nav__logo' alt="Icono del menu" />
        </div>

        <div className='nav_contLink'>

          <Link to={'/Amchard1'} className='nav_Link'>Grafico de barras</Link>
          
          <Link to={'/Amchard2'} className='nav_Link'>Grafico de torta</Link>

          <Link className='nav_Link'>Enlace3</Link>

          <Link className='nav_Link' onClick={OpenModLogin}>Iniciar sesion</Link>

        </div>

        
      </div>


      {/* ↓ ↓ ↓ Contenido del menu para celular ↓ ↓ ↓ */}
      <div className={MenuMovil === null ? 'ocultar': MenuMovil ? 'menuFondo' : 'menuFondo-Cerrar menuFondo_ocultar'}>
        <div className={`menuMovil ${MenuMovil  ? '' : 'menuMovil-Cerrar '}`}>
            <div className='HeaderPanel'>
                <p className='closeMenu_Text'>Menu</p>
                <img src={CerrarMenu} onClick={ShowMenu} className='closeMenu_icono' alt="Icono cerrar menu" />
            </div>


            <div className='BtnInicioSecion' onClick={OpenModLogin}>
              <p className='BtnInicioSecion_text'>Iniciar sesion</p>
              <img src={Avatar} className='BtnInicioSecion_img' alt="Silueta de persona" />
            </div>

            <div className='BoxOptions'>
              <div className='BoxOptions_Header' onClick={ShowOptions1}>
                <b className='BoxOptions_HeaderTitle'>Categoria</b>
                
                <img src={ArrowUp} 
                
                className={ContOptions1 ? 'BoxOptions_HeaderImg':'BoxOptions_HeaderImg BoxOptions_HeaderImg-rotarDown'} 
                alt="desplegar contenido" 
                />

              </div>

              {/* <div className='BoxOptions_separador'></div> */}
              <div className={ContOptions1 ? 'BoxOptions_separador':'BoxOptions_separador ocultar'}></div>

              <ul className={ContOptions1 ? 'BoxOptions_ContOptions':'ocultar'}>
                <Link className='BoxOptions_Option'>Categoria 1</Link>
                <Link className='BoxOptions_Option'>Categoria 2</Link>
                <Link className='BoxOptions_Option'>Categoria 3</Link>
                <Link className='BoxOptions_Option'>Categoria 4</Link>
              </ul>
            </div>
        </div>
        
      </div>
      {/* ↑ ↑ ↑ Contenido del menu para celular ↑ ↑ ↑ */}


      {ModalLogin && (<>
        <Login CloseModLogin={CloseModLogin}/>
      </>)}

      

    </nav>
  )
}

export default Nav