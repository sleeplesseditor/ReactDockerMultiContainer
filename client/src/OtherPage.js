import React from 'react';
import { Link } from 'react-router-dom'

const OtherPage = () => {
    return (
        <div>
            Yet Another Page
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default OtherPage;