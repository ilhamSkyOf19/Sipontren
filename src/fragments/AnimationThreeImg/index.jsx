import React from 'react'


import { motion } from 'framer-motion'
import thumbnailProfile from '../../assets/thumbnails/thumbnail_profile.png'
const AnimationThreeImg = ({ bg }) => {
    return (
        <div className='w-full h-[40vh] flex flex-col justify-end items-center rounded-4xl overflow-hidden md:h-[65vh] lg:h-[90vh] lg:w-[50%]'>
            <div className={`w-[90%] h-[13rem] flex flex-col justify-center items-center  rounded-3xl relative bg-${bg} md:w-[80%] md:h-[28rem] lg:h-[20rem]`}>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                    className='w-[120%] h-[100%]'
                >
                    <img src={thumbnailProfile} alt="logo sipontren" className='w-[100%] absolute bottom-0' />
                </motion.div>
            </div>
        </div>
    )
}

export default AnimationThreeImg
