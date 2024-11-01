import React from 'react'
import Navbar from './components/Navbar'
import Component from './components/Section1'
import FeaturesSection from './components/Section2'
import Section4 from './components/Section4';
import Section5 from './components/Section5';
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