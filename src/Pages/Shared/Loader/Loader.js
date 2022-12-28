import React from 'react';

const Loader = () => {
    return (
        <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary" role="status">
                {/* <span class="visually-hidden">Loading...</span> */}
            </div>
        </div>
    );
};

export default Loader;