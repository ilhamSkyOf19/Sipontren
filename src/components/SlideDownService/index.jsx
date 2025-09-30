import { memo } from 'react';
import TextSmBlue from '../text/TextSmBlue';

const SlideDownService = (props) => {

    const isShow = props.active === props.id;
    const handleClick = () => {
        props.setActive(isShow ? 1 : props.id);
    }
    return (
        <div className='w-full flex flex-col justify-start items-center gap-4 pt-4' onClick={handleClick}>
            {!props.first && <div className='w-full h-[0.7px] bg-secondary-blue'></div>}
            <div></div>
            <div className='w-full flex flex-row justify-between items-center gap-4 px-5'>
                <TextSmBlue text={props.title} />
                <TextSmBlue text={props.no} />
            </div>
            <div
                className={`w-full overflow-hidden transition-all duration-800 ease-in-out ${isShow ? 'max-h-[20rem]  opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {props.children}
            </div>
        </div>
    )
}

export default memo(SlideDownService);
