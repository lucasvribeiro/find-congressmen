import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Select, Icon } from 'antd'
import axios from 'axios'

import './index.css'


import Graph from '../../components/graph/index'
import MainLayout from '../../components/layout/index';

const loadingGif = require('../../images/loading.gif');

const { Option } = Select

const Home = () => {
    const [deputados, setDeputados] = useState([])
    const [nav, setNav] = useState('')
    const [selectedMenu, setSelectedMenu] = useState('1')
    const [options, setOptions] = useState([])

    const [despesas, setDespesas] = useState([])
    const [gastos, setGastos] = useState([])

    useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`)
        .then(res => {
            setDeputados(res.data.dados)
        })
    }, [])

    useEffect(() => {
        const values = []

        const filteredDespesas = []
        const gastos = []

        if(deputados.length && selectedMenu === '2') {

            for(var i = 0; i < 100; i++) {
                let id = deputados[i].id

                axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas`)
                .then(res => {
                    values.push({dep: id, despesas: res.data})
                    if(values.length === 100) {
                        for(var i = 0; i < 100; i++) {
                            for(var j = 0; j < values[i].despesas.dados.length; j++) {
                                let despesa = values[i].despesas.dados[j]
                                let index = filteredDespesas.indexOf(despesa.tipoDespesa)

                                if(index === -1){
                                    filteredDespesas.push(despesa.tipoDespesa)
                                    gastos.push(despesa.valorDocumento)
                                } else {
                                    gastos[index] += despesa.valorDocumento
                                }
                            }

                            
                        }

                        for(var i = 0; i < gastos.length; i++) {
                            gastos[i] = Math.trunc(gastos[i])
                        }

                        setGastos(gastos)
                        setDespesas(filteredDespesas)
                        
                    }
                })
            }
            
        }

        
        
    }, [deputados, selectedMenu])

    useEffect(() => {
        setOptions(deputados.map(d => <Option key={d.id}>{d.nome}</Option>));
 
    }, [deputados])

    const onChange = value => {
        setSelectedMenu(value.key)
    }

    const handleSearch = value => {
        let filteredOptions = []

        if(value) {
            deputados.forEach(function (d) {
                if (d.nome.startsWith(value.toUpperCase())){
                    filteredOptions.push(<Option key={d.id}>{d.nome}</Option>)
                }
            })
        }
            
        setOptions(filteredOptions)
    }

    const handleSelect = value => {
        setNav(`/deputado/${value}`)
    }
    
    if(nav) {
        return <Redirect push to = { nav } />
    } else {
        return (
            <MainLayout menu = { selectedMenu } onChange = { onChange }>
                <div className = "div-buscar">
                    <div className = "buscar">
                        Buscar Deputado...
                    </div>
                        <Select
                                suffixIcon = {<Icon type="search" />}
                                className = "select"
                                size = "large"
                                showSearch
                                placeholder = "Digite o nome de um deputado..."
                                defaultActiveFirstOption={false}
                                filterOption={false}
                                onSearch={handleSearch}
                                onSelect={handleSelect}
                                notFoundContent={null}
                            >
                                { options }
                        </Select>


                </div>
                    { selectedMenu === '1' ? <div></div> : despesas.length === 0 ? 
                 
                 <img src = {loadingGif}   width = "100" height = "100"/>
                : 
                <div>
                    <div className = "graph-title">
                        Gráfico de Despesas
                    </div>
                    <div className = "graph">
                        <Graph despesas = { despesas } gastos = { gastos }/>
                    </div>
                </div>
                 }

                    {/* <Graph despesas = { values.length === 10 ? despesas : [] } loading = {values.length === 10}/> */}
                

                
            </MainLayout>
        );
    }
}
  
export default Home;