import React from 'react'
import logo from '../../assets/icons/logo.png'
import arab from '../../assets/icons/arab.png'

const index = ({ width, position = 'around' }) => {
    return (
        <div className={`flex flex-row justify-${position} items-center w-[${width}]`}>
            <img className='w-[3rem]' src={logo} alt="" />
            <img className='w-[7rem]' src={arab} alt="" />
        </div>
    )
}

export default index
