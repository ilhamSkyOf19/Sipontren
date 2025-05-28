import useEmblaCarousel from 'embla-carousel-react';
import React from 'react'

const ScrollX = ({ children, slidesToScroll }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false, slidesToScroll: slidesToScroll || 1 });
    return (
        <div className="overflow-hidden w-full px-4 pb-12 pt-1 md:pl-8" ref={emblaRef}>
            <div className="flex gap-4">
                {children}
            </div>
        </div>
    )
}

export default ScrollX
