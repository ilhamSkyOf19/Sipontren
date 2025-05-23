import React from 'react'

const SubJudulCenter = ({ title, px = 0, color }) => {
    return (
        <p className={`text-xl text-center font-semibold relative before:absolute before:w-[5rem] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-[50%] before:-translate-x-[50%] px-${px}`} style={{ color: color ? color : '#0747a6' }}>
            {title}
        </p>
    )
}

export default SubJudulCenter
