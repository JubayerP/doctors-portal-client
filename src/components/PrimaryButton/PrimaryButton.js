import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-base-100 border-0">{children}</button>
        </div>
    );
};

export default PrimaryButton;