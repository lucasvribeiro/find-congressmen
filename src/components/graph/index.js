import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../assets/canvasjs.react'
import { Typography } from 'antd'



var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const { Text } = Typography

const options = {
    title: {
        text: "Maiores despesas dos deputados"
    },
    data: [{				
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
        }]
    }

const Graph = (props) => {
    if (!props.loading){

        console.log(options)
        return (
          <CanvasJSChart options = {{
            animationEnabled: true,
            theme: "dark2",
            title:{
                text: "Despesas dos Deputados..."
            },
            axisX: {
                title: "Despesa",
                reversed: true,
            },
            axisY: {
                title: "Gasto Total",
            },
            data: [{
                type: "pie",
				indexLabel: "{label}: {y}",		
				startAngle: -90,
                dataPoints: props.despesas
            }]
        }}/>
      )
    } else {
        return <Text>still loading...</Text>
    }
          
     
    }
  
export default Graph;