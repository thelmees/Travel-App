import React from 'react'
import'./home.css'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
            <div className='home'>
            
                <img className='home-img' src="https://i.postimg.cc/c4MPdjhm/Adventure-2.jpg" alt="" />

                <h1 className='home-txt'>A D V E N T U R E &nbsp;&nbsp; a w a i t s</h1>
                <p className='home-desc'>Choose Your Favourite Destination</p>
                <a className='home-btn'  href="/contact">Plan Trip</a>
            </div>
            <Banner/>
            <Card/>
            <Footer/>
        </div>
  )
}

export default Home