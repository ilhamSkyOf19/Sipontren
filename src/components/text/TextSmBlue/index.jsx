import React from 'react'

const TextSmBlue = ({ text, custom = '' }) => {
    return (
        <p className={`text-sm text-primary-blue ${custom} md:text-xl`}>{text}</p>
    )
}

export default TextSmBlue
