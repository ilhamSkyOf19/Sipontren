import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'
const index = () => {
    return (
        <button className='group w-34 flex flex-row justify-between items-center border border-secondary-blue bg-secondary-blue rounded-full py-2.5 px-5 active:bg-white transition ease-in-out duration-200'>
            <p className='text-center text-white text-xm group-active:text-secondary-blue'>More</p>
            <FaCircleChevronRight size={25} className='text-white group-active:text-secondary-blue' />
        </button>
    )
}

export default index
