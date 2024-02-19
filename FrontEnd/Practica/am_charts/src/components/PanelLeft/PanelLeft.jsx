import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import '../../css/PanelDoble.css'

import IconCerrarPanel from '../../assets/Iconos/Cerrar.png'




function PanelLeft({PanelIzquierdo, ShowPanelIzquierdo, Contenido}) {




  return (
    <div className={PanelIzquierdo === null ? 'ocultar mostrar': PanelIzquierdo ? 'FondoOscuro mostrar':'PanelLeft-ocultar mostrar'}>

      <div className={`PanelLeft ${PanelIzquierdo  ? '' : 'PanelLeft-Cerrar '}`}>

        <div className='HeaderPanel'>
          <p className='HeaderPanel__Text'>Filtros</p>
          <img src={IconCerrarPanel} onClick={ShowPanelIzquierdo}  className='HeaderPanel__IconClose' alt="Icono cerrar menu" />
        </div>

        {Contenido}

      </div>
    </div>
  )
}

export default PanelLeft