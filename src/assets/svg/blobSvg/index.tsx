const BlobSvg = () => {
    return (
        <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="#0747A6" offset="0%" />
                    <stop id="stop2" stopColor="#0747A6" offset="100%" />
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient)"
                d="M22.4,-25.6C30.1,-20.3,38,-14.2,41.2,-5.8C44.5,2.7,43.2,13.4,38.3,22.4C33.4,31.3,25,38.5,15.7,40.8C6.5,43.1,-3.7,40.5,-11.4,35.7C-19.1,31,-24.4,24.1,-28.1,16.7C-31.7,9.3,-33.8,1.5,-32.4,-5.6C-31.1,-12.8,-26.4,-19.3,-20.4,-24.9C-14.4,-30.5,-7.2,-35.1,0.1,-35.2C7.4,-35.4,14.8,-30.9,22.4,-25.6Z"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "0.3s" }}
            />
        </svg>
    );
};

export default BlobSvg;
