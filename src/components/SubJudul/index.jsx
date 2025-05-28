import React from 'react'

const index = ({ text }) => {
    return (
        <div className=' h-[10vh] w-full flex flex-row justify-center items-center'>
            <p className='font-poppins font-semibold text-xl text-secondary-blue bg-light-blue py-5 px-14 rounded-xl md:text-2xl md:py-6 md:px-20'>{text}</p>
        </div>
    )
}

export default index
