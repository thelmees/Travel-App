import React from 'react'
import './Banner.css'
import BannerData from './BannerData'

function Banner() {
    return (
        <div className='banner'>
            <h1>Popoular Destination</h1>
            <p>Tours give you the oppertunity to see a lot,
                within the frame.
            </p>

            <BannerData
            className='first-des'
            heading="Sahara Desert, Ireland"
            text="The Sahara Desert, spanning over 9 million square kilometers across North Africa,
                is a mesmerizing expanse of endless golden dunes and dramatic landscapes. As one of
                the hottest and driest places on Earth, it offers a captivating blend of harsh beauty
                and serene isolation. Adventurers flock here to experience camel treks across rolling sands and
                Ireland, known as the Emerald Isle, enchants visitors with its lush green landscapes, rugged 
                coastlines, and rich cultural heritage. From the vibrant streets of Dublin to the serene beauty of the 
                countryside, this island nation captivates travelers with its warm hospitality and timeless charm."
            img1="https://i.postimg.cc/G3XbQ5WD/desert.jpg"
            img2="https://i.postimg.cc/wBYzM8mC/img-2.jpg"
            />

            <BannerData
            className='first-des-reverse'
            heading="Bali,  Cappadocia Turkey"
            text="Bali, the 'Island of the Gods' is a captivating sanctuary nestled in the heart of 
                Indonesia. Lush rice paddies paint the landscape, volcanic mountains pierce the sky,
                and pristine beaches fringed with swaying palm trees beckon relaxation.witnessing ornate 
                temples adorned with colorful statues and experiencing the serenity of traditional daily 
                offerings and Turkey, a mesmerizing coastal town nestled on Turkey's southwestern coast, 
                promises an idyllic escape bathed in turquoise waters and golden sunshine. The famed Blue 
                Lagoon, a picture-perfect beach with a stunning lagoon merging into the Aegean Sea, is the 
                crown jewel of the region."
            img1="https://i.postimg.cc/C1Cx7KdY/contact.jpg"
            img2="https://i.postimg.cc/d34VCtV1/img-5.jpg"
            />
           
        </div>
    )
}

export default Banner