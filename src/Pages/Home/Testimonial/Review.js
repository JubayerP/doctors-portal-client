import React from 'react';

const Review = ({ r }) => {
    const { name, img, review, location } = r;
    return (
        <div className="card">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='ppl'/>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <small>{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;