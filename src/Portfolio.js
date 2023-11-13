import React from 'react'
import './Portfolio.css'
import Card from './Component/Card'
import {dataPortfolio} from './Data'

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
      <Card data={dataPortfolio}/>
      </div>
    </div>
  )
}

export default Portfolio
