import React from 'react'

const index = ({ text, weight = 500, color = 'white' }) => {
    return (
        <p className={`text-[1.5rem] font-poppins  font-[${weight}] text-${color}`}>{text}</p>
    )
}

export default index
