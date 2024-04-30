import React from 'react'
import './Card.css'

function Card() {
    return (

        <div className='cards'>

            <h1 className='heading'>Recent Trips</h1>
            <p className='t-txt'>You can discover unique destination using Google Maps</p>

           <div className='t-card'>

           <div className='card-gallery'>
            <div className='t-img'>
            <img className='card-img' src="https://i.postimg.cc/bv2zvVr7/explore.jpg" alt="" />
            </div>
            <h4> Trip in Italy</h4>
            <p className='card-txt'>Italy, From the ancient wonders of the Colosseum to the art 
            masterpieces of Florence, Italy is a time capsule of history. Indulge in rich pasta
            dishes and sip on local wines, all while soaking in the passionate zest for life that 
            defines this iconic country.</p>
           </div>

           <div className='card-gallery'>
           <div className='t-img'>
            <img className='card-img' src="https://i.postimg.cc/T2QC3ZSp/contact-2.jpg" alt="" />
            </div>
            <h4> Trip in Japan</h4>
            <p className='card-txt'>Japan, Immerse yourself in the serenity of Zen gardens and then 
            be dazzled by the neon lights of Tokyo. Savor the delicate flavors of sushi and discover
            the electrifying energy of anime and manga. Japan offers a unique blend of ancient 
            traditions and modern innovation.</p>
           </div>

           <div className='card-gallery'>
           <div className='t-img'>
            <img className='card-img' src="https://i.postimg.cc/zGLDM73x/img-3.jpg" alt="" />
            </div>
            <h4> Trip in Switzerland</h4>
            <p className='card-txt'>Switzerland, Hike the majestic peaks of the Alps, breathe in fresh
            mountain air, and marvel at the picturesque scenery of charming villages. Switzerland is a 
            paradise for nature lovers and adventure seekers alike, offering stunning beauty and 
            breathtaking landscapes.</p>
           </div>

           </div>

        </div>
    )
}

export default Card