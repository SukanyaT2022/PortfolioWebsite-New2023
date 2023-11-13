import React from 'react'
import Card from './Component/Card'
import {dataReact} from './Data'

const ReactPortfolio = () => {
  return (
    <div>
      <h2>React Portfolio</h2>
      <Card data={dataReact}/>
    </div>
  )
}

export default ReactPortfolio
