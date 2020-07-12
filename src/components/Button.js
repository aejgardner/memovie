import React from 'react';

const Button = ({ className, onClick, inlineStyling, children }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            style={inlineStyling}
        >{children}
        </button>
    );
};

export default Button;