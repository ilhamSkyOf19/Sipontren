import React from 'react'

const TextMdBlue = ({ text, custom = '' }) => {
    return (
        <p className={`text-md text-primary-blue ${custom}`}>{text}</p>
    )
}

export default TextMdBlue
