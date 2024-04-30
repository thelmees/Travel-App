import React from 'react'
import './Banner.css'


function BannerData({className,heading,text,img1,img2 }) {
    return (

        <div className={className}>
            <div className='des-text'>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className='img-ban'>
                <img src={img1} alt="Sahara Dessert" />
                <img src={img2} alt="Ireland" />
            </div>
        </div>
           
  )
}

export default BannerData