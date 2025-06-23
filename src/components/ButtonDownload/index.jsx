import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const ButtonDownload = ({ color, handleClick }) => {
    return (
        <div className={`text-white text-sm py-4 px-6 rounded-lg font-semibold flex flex-row justify-center items-center gap-2`} style={{ backgroundColor: color }} onClick={handleClick}>
            <FaDownload size={20} className='text-white' />
            <p className='text-white text-sm'>PDF</p>
        </div>
    )
}

export default ButtonDownload
