import React, { useState, useEffect } from 'react'
import { Avatar, Card, Icon, Divider, Tag } from 'antd'
import axios from 'axios'

import './index.css'

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
            <Card className = "profile-card">
                <div className = "card-title">

                    {
                        deputado !== '' ? 
                            <Meta
                                avatar = {
                                    <Avatar 
                                        src = {deputado.ultimoStatus.urlFoto} 
                                        className = "avatar"
                                    />
                                }
                                title = { deputado.nomeCivil }
                                description = { deputado.ultimoStatus.nomeEleitoral }
                            />
                    : null }
                </div>

                <div className = "info">
                    <Divider orientation = "left">
                        <Icon type = "info-circle" /> Informações Pessoais
                    </Divider>

                    <Tag className = "card-content">
                        Nascimento: { deputado.dataNascimento } 
                    </Tag>

                    <Divider orientation = "left">
                        <Icon type = "home" /> Cidade Natal
                    </Divider>

                    <Tag className = "card-content">
                        { deputado.municipioNascimento } - { deputado.ufNascimento }
                    </Tag>

                    <Divider orientation = "left">
                        <Icon type = "mail" /> Contato
                    </Divider>

                    {
                        deputado !== '' ?
                            <Tag className = "card-content">
                                { deputado.ultimoStatus.email }
                            </Tag>
                    : null}

                    <Divider orientation = "left">
                        <Icon type = "team" /> Partido
                    </Divider>
                    
                    {
                        deputado !== '' ? 
                            <Tag className = "card-content" >
                                { deputado.ultimoStatus.siglaPartido }
                            </Tag>
                    : null}
                    
                </div>
            </Card>

        </div>
        
    )
}
  
export default Profile;