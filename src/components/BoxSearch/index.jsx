import React from 'react'
import { FaSearch } from 'react-icons/fa'

const BoxSearch = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-2 w-full h-full relative before:absolute before:w-full before:h-[1.5px] before:bg-black before:bottom-0 before:left-0 focus-within:before:h-[3px]'>
            <input
                type="text"
                placeholder='Search'
                className='w-[100%] h-[100%] py-2.5 rounded-md outline-none text-lg ' />

            <FaSearch size={24} />
        </div>
    )
}

export default BoxSearch
