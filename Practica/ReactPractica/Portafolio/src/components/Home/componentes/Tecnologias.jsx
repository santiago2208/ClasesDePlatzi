import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AndroidStudio from '../../../assets/img/HomeImg/LogosTecnologia/AndroidStudio.png'
import Appsheet from '../../../assets/img/HomeImg/LogosTecnologia/Appsheet.png'
import Blender from '../../../assets/img/HomeImg/LogosTecnologia/Blender.png'
import bootstrap from '../../../assets/img/HomeImg/LogosTecnologia/bootstrap.png'
import C_Sharp from '../../../assets/img/HomeImg/LogosTecnologia/C_Sharp.png'
import CSS from '../../../assets/img/HomeImg/LogosTecnologia/CSS.png'
import Figma from '../../../assets/img/HomeImg/LogosTecnologia/Figma.png'
import Firebase_Logo from '../../../assets/img/HomeImg/LogosTecnologia/Firebase_Logo.png'
import GitYGutHub from '../../../assets/img/HomeImg/LogosTecnologia/GitYGutHub.png'
import Html from '../../../assets/img/HomeImg/LogosTecnologia/Html.png'
import java from '../../../assets/img/HomeImg/LogosTecnologia/java.png'
import javaScript from '../../../assets/img/HomeImg/LogosTecnologia/javaScript.png'
import NodeJS from '../../../assets/img/HomeImg/LogosTecnologia/NodeJS.png'
import PowerApps from '../../../assets/img/HomeImg/LogosTecnologia/PowerApps.png'
import PowerAutomate from '../../../assets/img/HomeImg/LogosTecnologia/PowerAutomate.png'
import Python from '../../../assets/img/HomeImg/LogosTecnologia/Python.png'
import ReactLogo from '../../../assets/img/HomeImg/LogosTecnologia/ReactLogo.png'
import SharePoint from '../../../assets/img/HomeImg/LogosTecnologia/SharePoint.png'
import SQL from '../../../assets/img/HomeImg/LogosTecnologia/SQL.png'
import Unity from '../../../assets/img/HomeImg/LogosTecnologia/Unity.png'
import Unreal from '../../../assets/img/HomeImg/LogosTecnologia/Unreal.png'
import Vite from '../../../assets/img/HomeImg/LogosTecnologia/Vite.jpg'

import Git from '../../../assets/img/HomeImg/LogosTecnologia/Git.png'
import GitHub from '../../../assets/img/HomeImg/LogosTecnologia/GitHub.png'





function Tecnologias() {

  const [MasUsado, setMasUsado] = useState(true);
  const [UsandoActua, setUsandoActua] = useState(false);

  const ToggleMasUsado = () => {
    setMasUsado(true); 
    setUsandoActua(false); 
  };

  const ToggleUsandoActua = () => {
    setMasUsado(false); 
    setUsandoActua(true); 
  };


  return (
    <section className='HomeSect2__ContSkills'>
      <div className='HomeSect2__itemTecn Color_green'>
        <h5 onClick={ToggleMasUsado} className='HomeSect2__TitElemnt'>{MasUsado &&'→'} Lo mas usado {MasUsado && '←'}</h5>
        <h5 onClick={ToggleUsandoActua} className='HomeSect2__TitElemnt'>{UsandoActua && '→'} Usando actualemente {UsandoActua && '←'}</h5>

        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          {MasUsado && (<>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem ' src={ReactLogo} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>React</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta libreria</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Firebase_Logo} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Firebase</h5>
                <p className='HomeSect2__logosText'>2 meses aprendiendo y usando esta plataforma y su api</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Html} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>HTML</h5>
                <p className='HomeSect2__logosText'>9 meses aprendiendo y usando este lenguaje</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={CSS} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>CSS</h5>
                <p className='HomeSect2__logosText'>9 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={javaScript} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>JavaScript</h5>
                <p className='HomeSect2__logosText'>5 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Git} alt="" /> {/**Pendiente cambiar */}
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Git</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitHub} alt="" /> {/**Pendiente cambiar */}
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>GitHub</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={NodeJS} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>NodeJS</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Vite} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Vite</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta herramienta</p>
              </div>
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={PowerApps} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>PowerApps</h5>
                <p className='HomeSect2__logosText'>6 meses aprendiendo y usando esta herramienta</p>
              </div>
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={PowerAutomate} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Power Automate</h5>
                <p className='HomeSect2__logosText'>6 meses aprendiendo y usando esta herramienta</p>
              </div>
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={SharePoint} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Share Point</h5>
                <p className='HomeSect2__logosText'>6 meses aprendiendo y usando esta herramienta</p>
              </div>
            </div>
          </>)}


          {UsandoActua && (<>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem ' src={ReactLogo} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>React</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta libreria</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Firebase_Logo} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Firebase</h5>
                <p className='HomeSect2__logosText'>2 meses aprendiendo y usando esta plataforma y su api</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Html} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>HTML</h5>
                <p className='HomeSect2__logosText'>9 meses aprendiendo y usando este lenguaje</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={CSS} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>CSS</h5>
                <p className='HomeSect2__logosText'>9 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={javaScript} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>JavaScript</h5>
                <p className='HomeSect2__logosText'>5 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Git} alt="" /> {/**Pendiente cambiar */}
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Git</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>

            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={GitHub} alt="" /> {/**Pendiente cambiar */}
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>GitHub</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={NodeJS} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>NodeJS</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta tecnologia</p>
              </div>
            </div>
            <div className="HomeSect2__Logos">
              <img className='HomeSect2_LogosItem' src={Vite} alt="" />
              <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Vite</h5>
                <p className='HomeSect2__logosText'>4 meses aprendiendo y usando esta herramienta</p>
              </div>
            </div>
          </>)}
          
        </div>

      </div>


      <div className='HomeSect2__itemTecn Color_lightYellow'>
        <h5 className='HomeSect2__TitElemnt2'>Algo de experiencia y sin volver a practicar</h5>
        
        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={bootstrap} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Bootstrap</h5>
                <p className='HomeSect2__logosText'>1 mes aprendiendo y usando este framework</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={java} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>java</h5>
                <p className='HomeSect2__logosText'>3 meses aprendiendo y usando esta tecnologia</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={AndroidStudio} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Android Studio</h5>
                <p className='HomeSect2__logosText'>3 meses aprendiendo y usando este entorno</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Python} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Python</h5>
                <p className='HomeSect2__logosText'>2 meses aprendiendo y usando esta tecnologia</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={SQL} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>SQL</h5>
                <p className='HomeSect2__logosText'>2 meses aprendiendo y usando esta tecnologia</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Figma} alt="" /> {/**Pendiente cambiar */}
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Figma</h5>
                <p className='HomeSect2__logosText'>1 mes aprendiendo y usando esta herramienta</p>
              </div>
          </div>


          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Unity} alt="" /> {/**Pendiente cambiar */}
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Unity</h5>
                <p className='HomeSect2__logosText'>3 meses aprendiendo y usando este motor de videojuegos</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Blender} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Blender</h5>
                <p className='HomeSect2__logosText'>2 meses aprendiendo y usando esta herramienta</p>
              </div>
          </div>
       
        </div>

      </div>

      <div className='HomeSect2__itemTecn Color_Orange'>
        <h5 className='HomeSect2__TitElemnt2'>Tecnologias con menos experiencia</h5>
        
        <div className='divisionLinea'></div>

        <div className='HomeSect2__ContLogos'>

          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Unreal} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Unreal engine 4</h5>
                <p className='HomeSect2__logosText'>1 mes o menos aprendiendo y usando este motor de videojuegos</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={Appsheet} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>Appsheet</h5>
                <p className='HomeSect2__logosText'>1 mes o menos aprendiendo y usando esta herramienta</p>
              </div>
          </div>
          <div className="HomeSect2__Logos">
            <img className='HomeSect2_LogosItem' src={C_Sharp} alt="" />
            <div className='HomeSect2_LogosDescripcion'>
                <h5 className='HomeSect2__logosTitle'>C Sharp</h5>
                <p className='HomeSect2__logosText'>1 mes o menos aprendiendo y usando esta tecnologia</p>
              </div>
          </div>
       
        </div>

      </div>




    </section> 
  )
}

export default Tecnologias