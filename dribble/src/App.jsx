import React from 'react'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Navbar from '../../src/components/Navbar'
import Component from '../../src/components/Section1'
import FeaturesSection from '../../src/components/Section2'

function App(){
  return(
    <div>
      <Navbar/>
      <Component/>
      <FeaturesSection/>
      <Section4/>
      <Section5/>

    </div>
  )
}

export default App