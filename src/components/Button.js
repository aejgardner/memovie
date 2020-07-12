import React from 'react';

const Button = ({ onClick, children, furtherStyling }) => {
    return (
        <button
            className="btn"
            onClick={onClick}
            style={furtherStyling}
        >{children}
        </button>
    );
};

export default Button;