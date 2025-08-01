import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ScrollXDesktop = ({ children, gap }) => {
    return (
        <SimpleBar
            autoHide={true}
            style={{
                width: '100%',
                overflowX: 'auto',
                overflowY: 'hidden',
            }}
        >
            <div
                className="flex flex-row pb-12 px-12 cursor-pointer"
                style={{
                    width: 'max-content', // supaya scroll X muncul
                    gap: gap || 20
                }}
            >
                {children}
            </div>
        </SimpleBar>
    )
}

export default ScrollXDesktop
