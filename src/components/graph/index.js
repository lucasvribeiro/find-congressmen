import React from 'react'
import Chart from "react-apexcharts"

import './index.css'

const Graph = (props) => {
        return (
                <Chart
                    type="bar" 
                    height="350"
                    options={{
                      legend: {
                        show: false
                      },
                      fill: {
                        colors: ['#0C5E3D']
                      },
                        plotOptions: {
                          bar: {
                            horizontal: true
                          }
                        },
                        dataLabels: {
                          enabled: false
                        },
                        xaxis: {
                          categories: props.despesas,
                        }
                    }}
                    series={
                        [{
                            data: props.gastos
                        }]
                    } 
                />
      )
	}
  
export default Graph;