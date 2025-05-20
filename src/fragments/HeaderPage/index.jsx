import React from 'react'

import { motion } from 'framer-motion'
import fileThumb from '../../assets/icons/file_thumb.png'

const HeaderPage = ({ whiteText1, whiteText2, YellowText, deskripsi }) => {
    return (
        <div className='w-full min-h-[45vh] bg-primary-blue flex flex-col justify-center items-start px-6 pt-[30%] pb-[10%] relative overflow-hidden'>
            <div className='flex flex-col justify-center items-start gap-3 z-10'>
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-xl text-white font-semibold'>{whiteText1}</p>
                    <p className='text-xl text-white font-semibold'>{whiteText2}</p>
                    <p className='w-[80%] text-xl text-primary-yellow font-semibold'>{YellowText}</p>
                </div>
                <p className='w-[70%] text-xs text-white font-[300]'>
                    {deskripsi}
                </p>
            </div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className='absolute z-0 -right-20 top-[35%]'
            >
                <img src={fileThumb} alt="logo sipontren" className='w-[12rem] opacity-60' />
            </motion.div>
        </div>
    )
}

export default HeaderPage
