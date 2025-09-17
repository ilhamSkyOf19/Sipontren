import React from 'react'
import { FaCircleChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <Link to={'/'} className='group w-34 flex flex-row justify-between items-center border border-secondary-blue bg-secondary-blue rounded-full py-2.5 px-5 active:bg-white transition ease-in-out duration-300 hover:bg-white md:py-4 md:px-7 md:w-44 lg:py-2 lg:px-6 lg:w-36 cursor-pointer'>
            <p className='text-center text-white text-xm group-active:text-secondary-blue md:text-2xl group-hover:text-secondary-blue lg:text-sm hover:text-primary-blue'>More</p>
            <FaCircleChevronRight size={30} className='text-white group-active:text-secondary-blue group-hover:text-secondary-blue' />
        </Link>
    )
}

export default index
