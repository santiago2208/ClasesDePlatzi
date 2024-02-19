import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import skills from '../../../json/JsonTemporal'

import adaptacionColor from '../../../assets/img/HomeImg/habilidadesIconos/1adaptacionColor.png'
import adaptacionLapiz from '../../../assets/img/HomeImg/habilidadesIconos/2adaptacionLapiz.png'
import creatividadColor from '../../../assets/img/HomeImg/habilidadesIconos/3creatividadColor.png'
import creatividadLapiz from '../../../assets/img/HomeImg/habilidadesIconos/4creatividadLapiz.png'
import desafiosColor from '../../../assets/img/HomeImg/habilidadesIconos/5desafiosColor.png'
import desafiosLapiz from '../../../assets/img/HomeImg/habilidadesIconos/6desafiosLapiz.png'
import gestion_de_equiposColor from '../../../assets/img/HomeImg/habilidadesIconos/7gestion-de-equiposColor.png'
import gestion_de_equiposLapiz from '../../../assets/img/HomeImg/habilidadesIconos/8gestion-de-equiposLapiz.png'
import libroColor from '../../../assets/img/HomeImg/habilidadesIconos/9libroColor.png'
import libroLapiz from '../../../assets/img/HomeImg/habilidadesIconos/10libroLapiz.png'
import optimizacion from '../../../assets/img/HomeImg/habilidadesIconos/11optimizacion-webColor.png'
import optimizacion_webLapiz from '../../../assets/img/HomeImg/habilidadesIconos/12optimizacion-webLapiz.png'
import requerimientoColor from '../../../assets/img/HomeImg/habilidadesIconos/13requerimientoColor.png'
import requerimientoLapiz from '../../../assets/img/HomeImg/habilidadesIconos/14requerimientoLapiz.png'

import cambiar from '../../../assets/img/HomeImg/habilidadesIconos/cambiar.png'




function Habilidades() {

  const [HabBlan_Vista, setHabBlan_descripcion] = useState(true);

  const [HabBlan_Vista__hover, setHabBlan_Vista__hover] = useState(false);
  

  const [ModalSkills, setModalSkills] = useState(false);

  const [TituloModal, setTituloModal] = useState("");
  const [DetalleModal, setDetalleModal] = useState("");


  const CamModHabilidad = (habilidad) => {
    const HabSelect = skills.find(skill => skill.habilidades === habilidad);
    
    if (!HabSelect) {
      return <p>No se encontró el producto.</p>;
    }

    setModalSkills(true)
    setTituloModal(HabSelect.habilidades)
    setDetalleModal(HabSelect.descripcion)
  };


  

  const Toggle_HabBlan_Vista = () => {
    setHabBlan_descripcion(!HabBlan_Vista); 
  };

  const showBtn_HV = () => {
    setHabBlan_Vista__hover(true); 
  };

  const esconderBtn_HV = () => {
    setHabBlan_Vista__hover(false); 
  };

  return (
    <section className={`HomeSect2__main2 ${HabBlan_Vista ? '':'MaxWith1000px'}`} onMouseEnter={showBtn_HV} onMouseLeave={esconderBtn_HV}>

      
    <img onMouseEnter={showBtn_HV} onMouseLeave={esconderBtn_HV} className={`VistaHabBlandas VistaHabBlandas--hover ${HabBlan_Vista__hover ? 'moveBtnHVIzq':''}`} onClick={Toggle_HabBlan_Vista} src={cambiar} alt="" />

    

    {HabBlan_Vista ? (
      <section className='HomeSect2__ContSkills quitarPadding'>
        <div className='habBlandas'>

          <div className='habBlandas__Item borderRight ColorGray bordeRadioLeft_up'>
            <img className='habBlandas__Icono ' src={adaptacionLapiz} alt="icono de adaptacion" />
            <p className='habBlandas__Text1'><b>Adaptacion:</b> Tengo la capacidad de adaptarme a diferentes tecnologías y herramientas de desarrollo. Incluso cuando se presentan limitaciones, demuestro flexibilidad y una disposición constante para aprender y utilizar nuevas soluciones tecnológicas.</p>
          </div>

          <div className='habBlandas__Item borderLeft ColorGray bordeRadioRight_up '>
            <p className='habBlandas__Text1 orden2'><b>Aprendizaje:</b> Me caracterizo por mi actitud de búsqueda constante de conocimientos y habilidades, tanto en términos de desarrollo técnico como de habilidades blandas. Mi interés está en el crecimiento personal y la mejora continua.</p>
            <img className='habBlandas__Icono orden1' src={libroLapiz} alt="Icono de un libro con serebro" />
          </div>

          <div className='habBlandas__Item borderRight'>
            <img className='habBlandas__Icono ' src={creatividadLapiz} alt="icono de creatividad" />
            <p className='habBlandas__Text1'><b>Creatividad:</b> Siempre estoy dispuesto a proponer soluciones creativas e innovadoras a los problemas de desarrollo. Me gusta generar ideas y mejoras, y valoro la retroalimentación y la colaboración para refinar esas ideas.</p>
          </div>

          <div className='habBlandas__Item borderLeft'>
            <p className='habBlandas__Text1 orden2'><b>Requerimientos:</b> Mi enfoque principal es atender y priorizar las necesidades del cliente o del empleador. Me aseguro de que los proyectos cumplan con las expectativas y los objetivos establecidos.</p>
            <img className='habBlandas__Icono orden1' src={requerimientoLapiz} alt="Icono de Requerimientos" />
          </div>

          <div className='habBlandas__Item borderRight ColorGray bordeRadioLeft_down'>
            <img className='habBlandas__Icono ' src={optimizacion_webLapiz} alt="Icono de Optimizacion" />
            <p className='habBlandas__Text1'><b>Optimización:</b>  Mi compromiso es alcanzar la excelencia en la calidad del trabajo. Siempre estoy pensando en cómo optimizar el código y las operaciones relacionadas con las bases de datos. Me enfoco en prácticas de desarrollo sólidas.</p>
          </div>

          <div className='habBlandas__Item borderLeft ColorGray bordeRadioRight_down'>
            <p className='habBlandas__Text1 orden2'><b>Trabajo en Equipo:</b> Me destaco por trabajar eficazmente en equipos, fomentando la colaboración y el apoyo mutuo. Siempre estoy dispuesto a escuchar y valorar las ideas de los demás, y aportar las mías. Además, tengo la flexibilidad y la disposición para asumir el liderazgo cuando la situación lo requiere.</p>
            <img className='habBlandas__Icono orden1' src={gestion_de_equiposLapiz} alt="Icono de desafios" />
          </div>

        </div>
      </section>
    ):(
      <section className='HomeSect2__ContSkills MaxWith1000px'>
        <div className='habBlandas2'>

          <div className='habBlanTargeta'  onClick={() => {CamModHabilidad("Adaptacion"); }}>
            <p className='habBlanTargeta__title'>
              Adaptacion
            </p>
            <img className='habBlanTargeta__icono' src={adaptacionColor} alt="" />
          </div>

          <div className='habBlanTargeta' onClick={() => {CamModHabilidad("Creatividad"); }}>
            <p className='habBlanTargeta__title'>
              Creatividad
            </p>
            <img className='habBlanTargeta__icono' src={creatividadColor} alt="" />
          </div>

          <div className='habBlanTargeta' onClick={() => {CamModHabilidad("Aprendizaje"); }}>
            <p className='habBlanTargeta__title'>
              Aprendizaje
            </p>
            <img className='habBlanTargeta__icono' src={libroColor} alt="" />
          </div>


          <div className='habBlanTargeta' onClick={() => {CamModHabilidad("Optimización"); }}>
            <p className='habBlanTargeta__title'>
             Optimización
            </p>
            <img className='habBlanTargeta__icono' src={optimizacion} alt="" />
          </div>

          <div className='habBlanTargeta' onClick={() => {CamModHabilidad("Trabajo en Equipo"); }}>
            <p className='habBlanTargeta__title'>
              Trabajo en Equipo
            </p>
            <img className='habBlanTargeta__icono' src={gestion_de_equiposColor} alt="" />
          </div>

          <div className='habBlanTargeta' onClick={() => {CamModHabilidad("Requerimientos"); }}>
            <p className='habBlanTargeta__title'>
              Requerimientos
            </p>
            <img className='habBlanTargeta__icono' src={requerimientoColor} alt="" />
          </div>
          

        </div>

      </section>
    )}


      {ModalSkills &&(<>
        <section className='Modal' >
          <div className='Modal__body'>
            <div className='Modal__header'>
              <h4 className='Modal__title'>{TituloModal}</h4>
            </div>
            <div className='Modal__Main'>
              <p>
                {DetalleModal}
              </p>
            </div>
            <div className='Modal__Fotter'>
              <div className='btnVerde' onClick={() => {   setModalSkills(false); }}>
                Cerrar
              </div>

            </div>
          </div>
        </section>
      </>)}
    
      


    </section>
  )
}

export default Habilidades