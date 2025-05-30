import React from 'react'
import TextLink from '../../components/TextLink'

const PusatBantuan = ({ title, link, text }) => {
    return (
        <div className='flex flex-col gap-2 lg:gap-4'>
            <p className='text-sm font-[300] text-primary-yellow mb-2 md:text-2xl lg:text-sm'>{title}</p>
            {link.map((item, index) => {
                return (
                    <TextLink key={index} link={item} text={text[index]} />
                )
            })}
        </div>
    )
}

export default PusatBantuan
