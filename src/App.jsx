import React from 'react'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Section1 from "./components/Section1";
import Footer from './components/Footer';

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  )
}

export default App