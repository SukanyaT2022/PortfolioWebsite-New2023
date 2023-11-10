import React from 'react'
import './App.css'
import Navigation from  './Component/Navigation'
import Footer from './Component/Footer'
import Layout from './Component/Layout'
import { Routes,Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import Home from './Home'

const App = () => {

  return (
   <>
{/* make react router dom --install npm first */}
<Layout>
<Routes>
   
        <Route path="/" element={<Home />}/>
          <Route path="portfolio" element={<Portfolio/>} />
       
  

      </Routes>
      </Layout>

   </>
  )
}

export default App
