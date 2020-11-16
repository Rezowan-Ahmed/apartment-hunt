import React from 'react';
import Navigation from '../Shareable/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row justify-content-center m-4">
                    page not found
                </div>
            </div>
        </div>
    );
};

export default NotFound;