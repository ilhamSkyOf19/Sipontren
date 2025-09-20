import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseIndexFade = ({ data, duration }) => {
    const [index, setIndex] = useState(0);

    // Ganti index setiap 4 detik (sesuaikan durasi animasi)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length || 0);
        }, duration); // 4 detik

        return () => clearInterval(interval);
    }, [data]);

    return index;
}

export default UseIndexFade
