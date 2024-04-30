import React from 'react'
import './contact.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='contact'>

        <img className='contact-img' src="https://i.postimg.cc/KjBCQckF/station.jpg" alt="" />

        <h1 className='contact-txt'>C O N T A C T</h1>
        
      </div>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact