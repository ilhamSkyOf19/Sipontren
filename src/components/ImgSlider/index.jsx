import React from 'react'
import { dataGallery } from '../../data/galleryData';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';


const index = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(dataGallery)
    }, [])


    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            // navigation={true}
            className='w-full mx-auto my-auto h-full bg-black'
        >
            {
                images && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="" className='mx-auto w-full h-full object-cover bg-center' />
                    </SwiperSlide>
                ))
            }
        </Swiper >
    )
}

export default index
