import React from 'react'
import Navbar from './components/Navbar'
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
export default App