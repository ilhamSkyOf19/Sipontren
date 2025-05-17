import React from 'react'
import Img1 from '../../assets/tujuanImgs/img_1.jpg'
import Img2 from '../../assets/tujuanImgs/img_2.jpg'
import Img3 from '../../assets/tujuanImgs/img_3.jpg'
import Img4 from '../../assets/tujuanImgs/img_4.jpg'
import Img5 from '../../assets/tujuanImgs/img_5.jpg'
import Img6 from '../../assets/tujuanImgs/img_6.jpg'
import Img7 from '../../assets/tujuanImgs/img_7.jpg'
import Img8 from '../../assets/tujuanImgs/img_8.jpg'
import Img9 from '../../assets/tujuanImgs/img_9.jpg'


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const index = () => {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]
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
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="" className='mx-auto w-full h-full object-cover bg-center' />
                </SwiperSlide>
            ))
            }
        </Swiper >
    )
}

export default index
