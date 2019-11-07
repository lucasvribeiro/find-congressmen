import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Avatar, Divider, Card, Icon } from 'antd'
import axios from 'axios'

import './index.css'

// nomeCivil: deputado.nomeCivil,
// nomeEleitoral: deputado.ultimoStatus.nomeEleitoral,
// dataNascimento: deputado.dataNascimento,
// municipioNascimento: deputado.municipioNascimento,
// ufNascimento: deputado.ufNascimento,
// partido: deputado.ultimoStatus.siglaPartido,
// email: deputado.ultimoStatus.email

const { Text } = Typography
const { Meta } = Card;

const Profile = (props) => {
    const [deputado, setDeputado] = useState('')

    let id = props.match.params.id

    useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
        .then(res => {
            console.log(res.data.dados.ultimoStatus.urlFoto)
            setDeputado(res.data.dados)
        })
    }, [])


    return (
        <div className = "main-div">
            <div className = "profile-photo">
            <Card className = "profile-card">
                    {deputado != '' ? 
                        <Meta
                        avatar={
                          <Avatar src = {deputado.ultimoStatus.urlFoto} style = {{ height: '6vw', width: '6vw' }}/>
                        }
                        title = { deputado.nomeCivil }
                        description = { deputado.ultimoStatus.nomeEleitoral }
                      />
                      :null }
            </Card>
            </div>

            <div className = "info">
                <Row>
                    <Col span={24}>
                    <Card title = {
                        <div>
                            Informações Pessoais
                            <div style = {{ textAlign: 'right' }}> <Icon type = "info" /> </div>
                            
                        </div>
                    } >
                        <Text>Data de Nascimento: {deputado.dataNascimento} </Text>
                        <Text>Nascido em: {deputado.municipioNascimento} - {deputado.ufNascimento} </Text>
                        {deputado != '' ? 
                            <Text>Partido: {deputado.ultimoStatus.siglaPartido}</Text>
                        : null}

                        {deputado != '' ?
                        <Text>E-mail: {deputado.ultimoStatus.email}</Text>
                        : null}
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}
  
export default Profile;