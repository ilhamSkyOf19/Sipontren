import React from 'react'
import frameKonten from '../../assets/frame/frame_konten.png'
import useWindowSize from '../../hook/UseWindowSize'

const LayoutSectionBg = ({ children, pb, pt, px, minH = 0 }) => {

    const { window } = useWindowSize().width;
    return (
        <div className={`w-full flex flex-col justify-start items-center pt-${pt} pb-${pb} overflow-hidden px-${px || 0}`} style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: window < 760 ? 'contain' : 'cover', backgroundRepeat: 'no-repeat', minHeight: `${minH}vh`, }}>
            {children}
        </div>
    )
}

export default LayoutSectionBg
