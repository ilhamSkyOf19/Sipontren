import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const useInputWarning = (triger) => {
    const inputRef = useRef(null)

    // state 
    const [borderStyle, setBorderStyle] = useState({ boxShadow: '0px 0px 0px 2px #0747A6', borderColor: '#0747A6' })

    useEffect(() => {
        if (triger) {
            setBorderStyle({ boxShadow: '0px 0px 0px 1px rgb(255, 0, 0)', borderColor: 'rgb(255, 0, 0)', outline: 'none' })
        } else {
            setBorderStyle({ boxShadow: '0px 0px 0px 1px #0747A6', borderColor: '#0747A6' })
        }
    }, [triger])


    return { inputRef, borderStyle }
}

export default useInputWarning
