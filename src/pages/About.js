import React from 'react'
import'./about.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function About() {
  return (
    <div>
        <Navbar/>
      <div className='about'>

        <img className='about-img' src="https://i.postimg.cc/6prNx1PV/vintage.jpg" alt="" />

        <h1 className='about-txt'>A B O U T</h1>
      </div>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About