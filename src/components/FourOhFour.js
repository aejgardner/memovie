import React from 'react';
import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <div className="background-image">
            <div className="lp__container">
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "5rem",
                        marginBottom: "2rem"
                    }}
                >Oops, page not found
                    </h1>
                <Link className="btn btn-secondary" to="/">Home</Link>
            </div>
        </div>
    );
};

export default FourOhFour;