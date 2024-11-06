import React from 'react'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Home from './components/Home';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Test from './components/Testimonials';
function App(){
  return(
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
=======
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

>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
export default App