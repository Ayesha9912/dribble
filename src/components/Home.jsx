import React from 'react'
import Component from './Section1'
import FeaturesSection from './Section2'
import Section4 from './Section4';
import Section5 from './Section5';
import Navbar from './Navbar';

function Home(){
  return (
    <>
    <Navbar/>
    <Component/>
      <FeaturesSection/>
      <Section4/>
      <Section5/>
      
    </>
  )
}

export default Home