import React from 'react'
import frameKonten from '../../assets/frame/frame_konten.png'

const LayoutSectionBg = ({ children, pb, pt, minH = 0 }) => {
    return (
        <div className={`w-full flex flex-col justify-start items-center pt-${pt} pb-${pb} overflow-hidden`} style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'contain', minHeight: `${minH}vh`, }}>
            {children}
        </div>
    )
}

export default LayoutSectionBg
