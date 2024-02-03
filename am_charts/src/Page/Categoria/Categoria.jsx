import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import IconPanelLeftOpen from '../../assets/Iconos/PanelLeftOpen.png'

import PanelLeft from '../../components/PanelLeft/PanelLeft'

import'./Categoria.css'
import '../../css/PanelDoble.css'






function Categoria() {

  const [PanelIzquierdo, setPanelIzquierdo] = useState(null);

  const ShowPanelIzquierdo = () => {
    setPanelIzquierdo(!PanelIzquierdo);
  };

  const contenidoPanelIzquierdo = (
    
    <div>
      <p>Este es el contenido del panel izquierdo</p>
      {/* Agrega más elementos según tus necesidades */}
    </div>
  );

  


  return (
    <main>

      <div className='BtnPanleIzquierdo' onClick={ShowPanelIzquierdo}>
        <span className='BtnPanleIzquierdo_Text'>Filtros</span>
        <img src={IconPanelLeftOpen} className='BtnPanleIzquierdo_Img' alt="Icono Abrir panel izquierdo" />
      </div>


      <PanelLeft 
      PanelIzquierdo={PanelIzquierdo} 
      ShowPanelIzquierdo={ShowPanelIzquierdo}
      Contenido={contenidoPanelIzquierdo}
      />

      <section>

      </section>

    </main>
  )
}

export default Categoria