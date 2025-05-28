import React from 'react'
import { Link } from 'react-router-dom'

const TextLink = ({ link, text }) => {
    return (
        <Link to={`/${link}`} className='text-sm text-white font-[300] md:text-xl'>{text}</Link>
    )
}

export default TextLink
