import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCrud = ({ children, color, link, size }) => {
    return (
        <Link to={`/admin/${link}`} className={clsx(
            `text-white text-sm  rounded-lg font-semibold`,
            size ? size : 'py-4 px-6'
        )} style={{ backgroundColor: color }}>
            {children}
        </Link>
    )
}

export default ButtonCrud
