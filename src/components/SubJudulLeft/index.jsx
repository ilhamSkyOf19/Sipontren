import React from 'react'

const SubJudulLeft = ({ title, px = 0 }) => {
    return (
        <p className={`text-2xl font-semibold text-primary-blue relative before:absolute before:w-[40%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 px-${px} md:text-3xl`}>
            {title}
        </p>
    )
}

export default SubJudulLeft
