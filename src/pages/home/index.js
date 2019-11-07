import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Typography, Select, Button } from 'antd'
import axios from 'axios'

import './index.css'


import Graph from '../../components/graph/index'
import MainLayout from '../../components/layout/index';


const { Text } = Typography
const { Option } = Select

const Home = () => {
    const [deputados, setDeputados] = useState([])
    const [despesas, setDespesas] = useState([])
    const [options, setOptions] = useState([])
    const [campos, setCampos] = useState([])
    const [nav, setNav] = useState('')
    const [loading, setLoading] = useState(true)

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
        const despesasObject = []

        if(deputados.length) {
            for(var i = 0; i < 100; i++) {
                let id = deputados[i].id

                axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas`)
                .then(res => {
                    values.push({dep: id, despesas: res.data})
                    // console.log(values)

                    if(values.length == 100) {
                        console.log("Foi!")
                        for(var i = 0; i < 100; i++) {
                            for(var j = 0; j < values[i].despesas.dados.length; j++) {
                                let despesa = values[i].despesas.dados[j]
                                let index = filteredDespesas.indexOf(despesa.tipoDespesa)

                                if(index == -1){
                                    filteredDespesas.push(despesa.tipoDespesa)
                                    gastos.push(despesa.valorDocumento)
                                } else {
                                    gastos[index] += despesa.valorDocumento
                                }
                            }
                            
                        }

                        filteredDespesas.forEach((key, i) => despesasObject.push({y: gastos[i], label: key }))
                        console.log(despesasObject);
                        setLoading(false)
                    }
                })
            }
            
        }
        setDespesas(despesasObject)
        setCampos(filteredDespesas)
        
    }, [deputados])

    useEffect(() => {
        setOptions(deputados.map(d => <Option key={d.id}>{d.nome}</Option>));
 
    }, [deputados])

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
    // } else if(loading) {
    //     console.log("still loading the Graph...")
    } else {
        return (
            <MainLayout>
                <div style = {{ marginTop: "100px" }}>
                    <Text>
                        Buscar deputado...
                    </Text>

                    <Select
                        showSearch
                        placeholder = "Digite o nome de um deputado..."
                        style = {{ width: "200px" }}
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        onSearch={handleSearch}
                        onSelect={handleSelect}
                        notFoundContent={null}
                    >
                        { options }
                    </Select>
                </div>  

                <div>
                    <Graph despesas = { despesas } loading = { loading } />
                </div>
            </MainLayout>
        );
    }
}
  
export default Home;