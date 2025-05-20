import React from 'react'

const TextLgBlue = ({ text, custom = '' }) => {
    return (
        <p className={`text-lg text-primary-blue ${custom}`}>{text}</p>
    )
}

export default TextLgBlue
