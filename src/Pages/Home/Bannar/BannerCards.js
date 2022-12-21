import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const BannerCards = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
            <div className="card bg-gradient-to-r from-secondary to-primary text-base-100 shadow-xl">
                <div className="card-body flex flex-row items-center justify-between w-full px-12 py-8">
                    <div className='mr-5'>
                        <img src={clock} className='' alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
            <div className="card bg-accent text-base-100 shadow-xl">
                <div className="card-body flex flex-row items-center justify-between w-full px-12 py-8">
                    <div className='mr-5'>
                        <img src={marker} className='' alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
            </div>
            <div className="card bg-gradient-to-r from-secondary to-primary text-base-100 shadow-xl">
                <div className="card-body flex flex-row items-center w-full px-12 py-8">
                    <div className='mr-5'>
                        <img src={phone} className='' alt="" />
                    </div>
                    <div>
                        <h2 className="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCards;