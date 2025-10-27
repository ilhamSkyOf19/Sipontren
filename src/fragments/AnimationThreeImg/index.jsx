

import thumbnailProfile from '../../assets/thumbnails/thumbnail_profile.png'
const AnimationThreeImg = ({ bg, pages }) => {
    return (
        <div className={`w-full h-[40vh] flex flex-col justify-end items-center rounded-4xl overflow-hidden md:h-[65vh] lg:h-[90vh] lg:w-[50%] ${pages && 'lg:w-[90%] '}`}>
            <div className={`w-[90%] h-[13rem] flex flex-col justify-center items-center  rounded-3xl relative bg-${bg} md:w-[80%] md:h-[28rem] lg:h-[20rem]`}>
                <img src={thumbnailProfile} alt="logo sipontren" className='w-[100%] absolute bottom-0' />
            </div>
        </div>
    )
}

export default AnimationThreeImg
