import React from 'react'
import frameKonten from '../../assets/frame/frame_konten.png'
import frameKonten2 from '../../assets/frame/frame_konten_2.png'
import frameKontenDesktop from '../../assets/frame/frame_konten_desktop.png'
import useWindowSize from '../../hook/UseWindowSize'

const LayoutSectionBg = ({ children, pb, pt, px, minH = 0, bg2, bg3, size, noBg }) => {

    const window = useWindowSize().width;
    return (
        <div className={`w-full flex flex-col justify-start items-center pt-${pt} pb-${pb} overflow-hidden px-${px || 0}`}
            style={{
                backgroundImage: `url(${noBg ? '' : (bg2 ? frameKonten2 : bg3 ? frameKontenDesktop : frameKonten)})`,
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
