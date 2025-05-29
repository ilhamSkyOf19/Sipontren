import React from 'react'
import frameKonten from '../../assets/frame/frame_konten.png'
import frameKonten2 from '../../assets/frame/frame_konten_2.png'
import useWindowSize from '../../hook/UseWindowSize'

const LayoutSectionBg = ({ children, pb, pt, px, minH = 0, bg2, size }) => {

    const window = useWindowSize().width;
    return (
        <div className={`w-full flex flex-col justify-start items-center pt-${pt} pb-${pb} overflow-hidden px-${px || 0}`}
            style={{
                backgroundImage: `url(${bg2 ? frameKonten2 : frameKonten})`,
                backgroundPosition: 'center',
                backgroundSize: size,
                backgroundRepeat: 'repeat',
                minHeight: `${minH}vh`,
            }}>
            {children}
        </div>
    )
}

export default LayoutSectionBg
