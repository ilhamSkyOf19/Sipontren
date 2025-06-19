import React from 'react'
import { memo } from 'react';
import TextSmBlue from '../text/TextSmBlue';
import TextRotate from '../text/TextRotate';

const SlideDownService = (props) => {

    const isShow = props.active === props.id;
    const handleClick = () => {
        props.setActive(isShow ? 1 : props.id);
    }
    return (
        <div className={`${isShow ? 'w-[78%] h-full' : 'w-[8%]'}  transition-all duration-800 ease-in-out shrink-0 h-full flex flex-row justify-start items-center gap-2 cursor-pointer`} onClick={handleClick}>
            {!props.first && <div className='h-full w-[0.7px] bg-secondary-blue'></div>}
            <div></div>
            <div className='h-full w-[8%] flex flex-col justify-between items-center gap-4 px-5 py-6'>
                <TextSmBlue text={props.no} />
                <div className={`h-full flex flex-col justify-center items-center `}>
                    <TextRotate text={props.title} custom={'w-[280%]'} />
                </div>
            </div>
            <div
                className={`h-full overflow-hidden transition-all duration-800 ease-in-out ${isShow ? 'max-w-[78%] h-full  opacity-100' : 'max-w-0 opacity-0 h-full'}`}
            >
                {props.children}
            </div>
        </div>
    )
}

export default memo(SlideDownService);
