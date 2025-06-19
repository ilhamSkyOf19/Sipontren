import React from 'react'
import { Link } from 'react-router-dom'

const TextLink = ({ link, text, active }) => {
    return (
        <>
            {
                active ? (
                    <Link to={`/${link}`} className='text-sm text-white font-[300] md:text-xl lg:text-sm relative before:absolute before:w-full before:h-[1px] before:bg-yellow-300 before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 lg:font-normal' > {text}</Link >
                ) : (
                    <Link to={`/${link}`} className='text-sm text-white font-[300] md:text-xl lg:text-sm' > {text}</Link >
                )
            }

        </>
    )
}

export default TextLink
