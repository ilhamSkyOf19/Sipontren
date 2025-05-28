import React from 'react'
import logo from '../../assets/icons/logo.png'
import arab from '../../assets/icons/arab.png'

const index = ({ width, position = 'around' }) => {
    return (
        <div className={`flex flex-row justify-${position} items-center`} style={{ width: width }}>
            <img className='w-[3rem] md:w-[7rem]' src={logo} alt="" />
            <img className='w-[7rem] md:w-[11rem]' src={arab} alt="" />
        </div>
    )
}

export default index
