import React from 'react'

const SubJudulCenter = ({ title, px = 0, color }) => {
    return (
        <p className={`text-xl text-center font-semibold relative before:absolute before:w-[40%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-[50%] before:-translate-x-[50%] px-${px} md:text-3xl lg:before:w-[10rem] lg:text-2xl`} style={{ color: color ? color : '#0747a6' }}>
            {title}
        </p>
    )
}

export default SubJudulCenter
