import React, { useState, useEffect, useRef  } from 'react'
import { onSnapshot, collection, addDoc, doc, getFirestore, setDoc  } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

import { Link } from 'react-router-dom'

import'./Home.css'


import GraficoDePruebas from '../../components/Graficos.jsx/GraficoDePruebas/GraficoDePruebas';



function PgPruebas() {

  

  // const Agregar = async () => {
  //   const docRef = await addDoc(collection(db, "cities"), {
  //     name: "Tokyo",
  //     country: "Japan"
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // }

  const Agregar = async () => {
    try {
      const docRef = await addDoc(collection(db, "cities"), {
        name: "Colombia",
        country: "Medellin"
      });

      console.log("Document written with ID: ", docRef.id);
      setDocumentId(docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  }


  return (
    <main>
       <h1>Total de Registros: </h1>

       <hr />

        <GraficoDePruebas></GraficoDePruebas>

      {/* Puedes agregar el contenedor para el gráfico de barras aquí */}

      <button onClick={Agregar}>agregar</button>
    </main>
  )
}

export default PgPruebas