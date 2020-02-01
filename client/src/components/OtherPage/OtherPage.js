import React from 'react';
import { Link } from 'react-router-dom'

const OtherPage = () => {
    return (
        <div className="fib__container">
            <h2>Yet Another Page</h2>
            <div className="link__container">
                <Link className="link__link" to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default OtherPage;