import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCrud = ({ children, color, link }) => {
    return (
        <Link to={`/admin/${link}`} className={`text-white text-sm py-4 px-6 rounded-lg font-semibold`} style={{ backgroundColor: color }}>{children}</Link>
    )
}

export default ButtonCrud
