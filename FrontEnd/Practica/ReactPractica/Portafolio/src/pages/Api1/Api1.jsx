import {React, useEffect, useState} from 'react'




const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=3';


const Api1 = () => {

    const [Gatos, setGatos] = useState([])


    

    async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();

        console.log(data)
        setGatos(data[0].url)

        data
    }


    useEffect(() => {
        reload();
    }, []);


  



  return (
    <div>
        <img src={Gatos} width="300px"  alt="" />
    </div>
  )
}

export default Api1

