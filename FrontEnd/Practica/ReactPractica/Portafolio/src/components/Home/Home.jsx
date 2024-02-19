import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Firebase/Firebase';
import Tecnologias from './componentes/Tecnologias'
import Habilidades from './componentes/Habilidades'
import FotoSantiago from '../../assets/img/HomeImg/fotoSanti2.jpeg'
import'./Home.css'

import IconEmpresa from '../../assets/img/HomeImg/Exp_Laboral/Empresa.png'
import iconCargo from '../../assets/img/HomeImg/Exp_Laboral/Cargo.png'
import iconFecha from '../../assets/img/HomeImg/Exp_Laboral/Fecha.png'
import iconTecnologias from '../../assets/img/HomeImg/Exp_Laboral/Tecnologias.png'




function Home() {

  const [ShowTecnologias, setShowTecnologias] = useState(true);
  const [ShowHabilidades, setShowHabilidades] = useState(false);



  const ToggleTecnologias = () => {
    setShowHabilidades(false); 
    setShowTecnologias(true); 
  };

  const ToggleHabilidades = () => {
    setShowTecnologias(false); 
    setShowHabilidades(true); 
  };

  return (
    <main>
      <section className='HomeCont'>
      
        <section className='HomeSect1'>
          <section className='HomeSect1__contleft'>
            {/* <h2>Santiago Alvarez Porras</h2> {//posible opcion}*/}
            <img src={FotoSantiago} className='HomeSect1__FotoSanti' alt="" />
          </section>
          
          <section className='HomeSect1__contRight'>
            <h1 className='HomeSect1__Title'>Sobre mi</h1>
            <p className='HomeSect1__Text'>
              Hola, mi nombres es Santiago Alvarez Porras y soy tecnico en desarrollo de software con solidos conocimientos en HTML y CSS. <br /><br />

              Tengo experiencia laboral como desarrollador fullStack y como asistente en desarrollo de software. En ambos roles, desempeñé un papel fundamental en el desarrollo inicial de las aplicaciones. Contribuí significativamente al backend, participando en la creación de la lógica para el inicio de sesión, implementando operaciones CRUD con la información y encargándome de la maquetación de las aplicaciones.

              <br /> <br />
              Me apasiona aprender cosas nuevas, programar y encontrar soluciones innovadoras para abordar problemas sociales y medioambientales utilizando la tecnología y el emprendimiento.

              
            </p>
          </section>
        </section>

        
        <section className='HomeSect2'>
          <div className='HomeSect2__Header'>
            <h1 className='HomeSect2__title'>↓ Skills ↓</h1>
          </div>  

          <div className='HomeSect2__Main'>
            <div className='HomeSect2__Opciones'>
              <div className={`HomeSect2__btnleft ${ShowTecnologias ? 'btnSelected1':''}`} 
              onClick={ToggleTecnologias}
              >
                Uso de tecnologias
              </div>
              <div className={`HomeSect2__btnRight ${ShowHabilidades ? 'btnSelected1':''}`}
              onClick={ToggleHabilidades}>
                Habilidades blandas
              </div>

              <div ></div>
            </div>

              {ShowTecnologias && (
                <Tecnologias/>
              )}

              {ShowHabilidades && (
                <Habilidades/>
              )}
          </div>
        </section>

        <section className='HomeSect3'>
          <div className='HomeSect2__Header'>
            <h1 className='HomeSect2__title'>↓ Experiencia laboral ↓</h1>
          </div>  

            {/* primera targeta seccion 3 */}
          <div className='TargetaSec3'>

            <div className='TargetaSec3__elemento'>
                <div className='TargetaSec3__ContDetalle' title='Empresa'>
                  <img className='TargetaSec3__Icon' src={IconEmpresa} alt="Icono de Empresa" />
                  <h3  className='TargetaSec3__TitleLeft'>Empresas públicas de Medellín</h3>
                </div>

                <div className='TargetaSec3__ContDetalle' title='Fecha de ingreso y salida'>
                  <img className='TargetaSec3__Icon' src={iconFecha} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Enero/2023 – Julio/2023</h3>
                </div>

                <div className='TargetaSec3__ContDetalle' title='Cargo'>
                  <img className='TargetaSec3__Icon' src={iconCargo} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Asistente en desarrollo de software</h3>
                </div>

                <div className='TargetaSec3__ContDetalle marginButton0' title='Tecnologias usadas'>
                  <img className='TargetaSec3__Icon' src={iconTecnologias} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Tecnologias y herramientas usadas</h3>
                </div>
                <p className='TargetaSec3__DesTec'>Power Apps, Power Automate y SharePoint</p>
            </div>

            <div className='TargetaSec3__elemento'>
                <h3 className='TargetaSec3__TitleRight'>Tareas realizadas</h3>
                <p className='TargetaSec3__textRight'>Durante mis prácticas en EPM, tuve la oportunidad de desarrollar una aplicación que ofrece una perspectiva detallada de las pruebas de funcionalidad llevadas a cabo en cada activo, lo que permitió la automatización de diversos procesos. Además, incorporé una funcionalidad que permite asignar tareas a los ayudantes, facilitando que estos consulten, directamente desde la aplicación, qué equipos requieren ser sometidos a pruebas.</p>
            </div>
          </div>

          {/* segunda targeta seccion 3 */}
          <div className='TargetaSec3'>

            <div className='TargetaSec3__elemento'>
                <div className='TargetaSec3__ContDetalle' title='Empresa'>
                  <img className='TargetaSec3__Icon' src={IconEmpresa} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Independiente</h3>
                </div>

                <div className='TargetaSec3__ContDetalle' title='Fecha de ingreso y salida'>
                  <img className='TargetaSec3__Icon' src={iconFecha} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Agosto/2023 – Septiembre/2023</h3>
                </div>

                <div className='TargetaSec3__ContDetalle' title='Cargo'>
                  <img className='TargetaSec3__Icon' src={iconCargo} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Desarrollador web</h3>
                </div>

                <div className='TargetaSec3__ContDetalle marginButton0' title='Tecnologias usadas'>
                  <img className='TargetaSec3__Icon' src={iconTecnologias} alt="Icono de Empresa" />
                  <h3 className='TargetaSec3__TitleLeft'>Tecnologias y herramientas usadas</h3>
                </div>
                <p className='TargetaSec3__DesTec'>HTML, CSS, React, Vite, Node.js y Firebase.</p>
            </div>

            <div className='TargetaSec3__elemento'>
              <h3 className='TargetaSec3__TitleRight'>Tareas realizadas</h3>
              {/* <p className='TargetaSec3__textRight'>Durante mi experiencia como freelancer, colaboré en el desarrollo de una aplicación web. En este proyecto, desempeñé roles tanto en el front-end como en el back-end. Una de mis principales responsabilidades fue la implementación de la API de Firebase. </p> */}
              <p className='TargetaSec3__textRight'>Colaboré integralmente en el desarrollo de una aplicación web como freelancer, participando en roles de front-end y back-end. Contribuí significativamente en la implementación de la API de Firebase, realizando operaciones CRUD, ayudé en el diseño de la lógica y maquetación para funciones clave como inicio de sesión, recuperación de contraseñas y eliminación de cuentas de usuarios. Además, migre el proyecto de Webpack a Vite y gestioné eficazmente la integración de cambios mediante Git y GitHub. </p>

            </div>
          </div>

        </section>

        {/* seccion 4 */}
        <section className='HomeSect4'> {/* seccion 4 */}
          <div className='HomeSect2__Header'>
            <h1 className='HomeSect2__title'>↓ Educacion ↓</h1>
          </div>

          <h1 className='HomeSect4__Title'>Títulos</h1>  

          <div className='HomeSect4__Main'>


            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Institución</h4>
                <p className='TargetaSec4__Text'>Pro Camilo Torres Restrepo</p>
              </div>
              <div className='TargetaSec4__Main'>
                <div>
                  <h4 className='TargetaSec4__Title'>Título</h4>
                  <p className='TargetaSec4__Text'>Bachiller</p>
                </div>

                <div>
                  <h4 className='TargetaSec4__Title'>Fecha</h4>
                  <p className='TargetaSec4__Text'>Diciembre del 2017</p>
                </div>
              </div>
            </div>



            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Institución</h4>
                <p className='TargetaSec4__Text'>Cesde</p>
              </div>
              <div className='TargetaSec4__Main'>
                <h4 className='TargetaSec4__Title'>Título</h4>
                <p className='TargetaSec4__Text'>Tecnico laboral como asistente en desarrollo de software</p>
                <h4 className='TargetaSec4__Title'>Fecha</h4>
                <p className='TargetaSec4__Text'>Julio del 2023</p>
              </div>
            </div>

          
          </div>

          <h1 className='HomeSect4__Title'>Cursos y certificados</h1>  

          <div className='HomeSect4__Main'>


            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Entidad</h4>
                <p className='TargetaSec4__Text'>Platzi</p>
              </div>
              <div className='TargetaSec4__Main'>
                <div>
                  <h4 className='TargetaSec4__Title'>Curso</h4>
                  <p className='TargetaSec4__Text'>Curso Definitivo de HTML y CSS</p>
                </div>

                <div>
                  <h4 className='TargetaSec4__Title'>Fecha</h4>
                  <p className='TargetaSec4__Text'>31 de octubre de 2022</p>
                </div>
              </div>
            </div>



            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Institución</h4>
                <p className='TargetaSec4__Text'>Universidad de antioquia</p>
              </div>
              <div className='TargetaSec4__Main'>
                <h4 className='TargetaSec4__Title'>Certificado</h4>
                <p className='TargetaSec4__Text'>Programación web</p>
                <h4 className='TargetaSec4__Title'>Fecha</h4>
                <p className='TargetaSec4__Text'>10 de noviembre de 2023</p>
              </div>
            </div>

            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Entidad</h4>
                <p className='TargetaSec4__Text'>Renault Group</p>
              </div>
              <div className='TargetaSec4__Main'>
                <h4 className='TargetaSec4__Title'>Certificado</h4>
                <p className='TargetaSec4__Text'>Excelente desempeño academico</p>
                <h4 className='TargetaSec4__Title'>Fecha</h4>
                <p className='TargetaSec4__Text'>Abril de 2023</p>
              </div>
            </div>

          </div>


          {/* Estudios sin finalizar */}

          <h1 className='HomeSect4__Title'>Estudios sin terminar</h1>  


          <div className='HomeSect4__Main'>


            <div className='TargetaSec4'>
              <div className='TargetaSec4__Header'>
                <h4 className='TargetaSec4__Title'>Institución</h4>
                <p className='TargetaSec4__Text'>Politecnico Grancolombiano</p>
              </div>
              <div className='TargetaSec4__Main'>
                <div>
                  <h4 className='TargetaSec4__Title'>Carrera</h4>
                  <p className='TargetaSec4__Text'>Negocios internacionales</p>
                </div>

                <div>
                  <h4 className='TargetaSec4__Title'>Estudie</h4>
                  <p className='TargetaSec4__Text'>7 semestres</p>
                </div>
              </div>
            </div>


          </div>

          

          

          

        </section>

        
      
      </section>
    </main>
  )
}

export default Home