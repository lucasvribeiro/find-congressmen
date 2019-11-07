import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './index.css'

const Profile = (props) => {
    const [deputado, setDeputado] = useState([])

    let id = props.match.params.id

    useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
        .then(res => {
            console.log(res.data)
            setDeputado(res.data.dados)
        })
    }, [])

    return (
        <div className = "profile">
            <h1>Hello {deputado.nomeCivil}!</h1>
        </div>
    )
}
  
export default Profile;