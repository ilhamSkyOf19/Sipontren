import React from 'react'
import logo from '../../assets/icons/logo.png'
import arab from '../../assets/icons/arab.png'

const index = ({ width, position = 'around' }) => {
    return (
        <div className={`flex flex-row justify-${position} items-end`} style={{ width: width }}>
            <img className='w-[50%] lg:w-[35%]' src={logo} alt="" loading='lazy' />
            <img className='w-[100%]' src={arab} alt="" loading='lazy' />
        </div>
    )
}

export default index
