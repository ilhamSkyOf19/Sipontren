import React from 'react'

const TextSmBlue = ({ text, custom = '' }) => {
    return (
        <p className={`text-sm text-primary-blue ${custom}`}>{text}</p>
    )
}

export default TextSmBlue
