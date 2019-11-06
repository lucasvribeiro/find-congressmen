import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'

const Home = () => {
  const [deputados, setDeputados] = useState({});

  useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`)
      .then(res => {
        setDeputados(res.data)
      })
  }, [])

  useEffect(() => {
    console.log(deputados)
  }, [deputados])

  return (
    <div className="teste">
      <h1>Home!</h1>
    </div>
  );
}
  
export default Home;