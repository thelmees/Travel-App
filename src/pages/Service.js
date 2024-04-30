import React from 'react'
import './service.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Service() {
  return (
    <div>
      <Navbar />
      <div className='service'>

        <img className='service-img' src="https://i.postimg.cc/xTNjk5Xh/service.jpg" alt="" />

        <h1 className='service-txt'>S E R V I C E</h1>
      </div>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Service