import React from 'react'

const TextRotate = ({ text, custom = '' }) => {
    return (
        <p className={`text-lg  text-primary-blue transform -rotate-90  ${custom}`}>{text}</p>
    )
}

export default TextRotate
