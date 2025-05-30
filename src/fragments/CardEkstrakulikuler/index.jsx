import React from 'react'
import bg1 from '../../assets/ekstrakulikuler/bg-1.png'
import bg2 from '../../assets/ekstrakulikuler/bg-2.png'
import bg3 from '../../assets/ekstrakulikuler/bg-3.png'
import bg4 from '../../assets/ekstrakulikuler/bg-4.png'
import bg5 from '../../assets/ekstrakulikuler/bg-5.png'
import person1 from '../../assets/ekstrakulikuler/person-1.png'
import person2 from '../../assets/ekstrakulikuler/person-2.png'
import person3 from '../../assets/ekstrakulikuler/person-3.png'
import person4 from '../../assets/ekstrakulikuler/person-4.png'
import person5 from '../../assets/ekstrakulikuler/person-5.png'
import person6 from '../../assets/ekstrakulikuler/tapak_suci.png'
import logo1 from '../../assets/icons/logo-1.png'
import logo2 from '../../assets/icons/logo-2.png'
import logo3 from '../../assets/icons/logo-3.png'
import { useMemo } from 'react'
import { memo } from 'react'
import useWindowSize from '../../hook/UseWindowSize'
const index = ({ logo, person, title, ket, subJudul, bg, iconSize = '55%', id }) => {
    const images = useMemo(() => ({
        bg1: bg1,
        bg2: bg2,
        bg3: bg3,
        bg4: bg4,
        bg5: bg5,
        person1: person1,
        person2: person2,
        person3: person3,
        person4: person4,
        person5: person5,
        person6: person6,
        logo1: logo1,
        logo2: logo2,
        logo3: logo3,
    }), [])

    const window = useWindowSize().width
    return (
        <div className='w-[100%] h-[18rem] bg-white rounded-xl shadow-xl flex flex-col justify-between items-center overflow-hidden shrink-0 md:w-[65%] md:h-[26rem] md:mt-12 lg:w-[38%] lg:h-[20rem]'>
            <div className={`w-full h-[65%] flex flex-row justify-between items-center bg-cover overflow-hidden`} style={{ backgroundImage: `url(${images[bg]})` }}>
                {id === 2 ? (
                    <>
                        <div className='w-[80%] h-full flex flex-row justify-end items-center pt-4 relative'>
                            <img src={images[person]} alt="logo" width={window > 1024 ? '45%' : '55%'} className='absolute left-5' />
                            <img src={person3} alt="logo" width={window > 1024 ? '45%' : '55%'} className='mt-4 absolute right-4 bottom-0 lg:right-10' />
                        </div>
                        <div className='w-[50%] h-full flex justify-center items-center'>
                            <img src={images[logo]} alt="logo" width={iconSize} />
                        </div>
                    </>
                ) : id === 1 ? (
                    <>
                        <div className='w-[50%] h-full flex justify-center items-center'>
                            <img src={images[logo]} alt="logo" width={iconSize} />
                        </div>
                        <div className='w-[50%] h-full flex justify-end items-center pt-4 relative'>
                            <img src={images[person]} alt="logo" width={window > 1024 ? '70%' : '85%'} className='absolute bottom-0' />
                        </div>
                    </>

                ) : id === 5 ? (
                    <>
                        <div className='w-[65%] h-full flex justify-start items-center pt-8 pl-2 relative'>
                            <img src={images[person]} alt="logo" width={window > 1024 ? '80%' : '100%'} className='absolute bottom-0' />
                        </div>
                        <div className='w-[35%] h-full flex justify-start items-center'>
                            <img src={images[logo]} alt="logo" width={iconSize} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='w-[60%] h-full flex justify-start items-center pt-4 pl-2'>
                            <img src={images[person]} alt="logo" width={window > 1024 ? '75%' : '90%'} />
                        </div>
                        <div className='w-[40%] h-full flex justify-center items-center'>
                        </div>
                    </>
                )}
            </div>
            <div className='w-full h-[30%] flex flex-col justify-end items-start pb-7 px-4 md:gap-2'>
                <p className='text-[0.7rem] px-4 py-1 bg-secondary-blue text-white rounded-sm md:text-lg lg:text-xs'>{subJudul}</p>
                <p className='text-md font-semibold md:text-lg lg:text-sm'>{title}</p>
                <p className='text-[0.6rem] font-[300] md:text-sm lg:text-[0.6rem]'>{ket}</p>
            </div>
        </div>
    )
}

export default memo(index)
