import React from 'react';

const TextSpace = ({ text, custom }) => {
    return (
        <div className="w-full flex justify-between mb-0.5 whitespace-pre">
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="text-xs font-light text-white italic"
                    style={custom}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default TextSpace;
