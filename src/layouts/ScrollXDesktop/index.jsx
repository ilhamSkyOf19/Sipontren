import React from 'react'

const ScrollXDesktop = ({ children, gap }) => {
    return (
        <div className={`w-full flex flex-row justify-start items-center gap-${gap || 5} overflow-x-scroll scroll-thumb-only pb-12 px-12 cursor-pointer `}>
            {children}
        </div>
    )
}

export default ScrollXDesktop
