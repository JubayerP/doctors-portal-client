import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import BannerCards from './BannerCards';

const Banner = () => {
    return (
        <div className='mb-32'>
            <div className="hero bg-cover min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='bannerImage' />
                    <div>
                        <h1 className="text-5xl text-accent leading-[65px] font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 text-accent text-base leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary text-base-100 border-0">Get Started</button>
                    </div>
                </div>
            </div>
            <BannerCards />
        </div>
    );
};

export default Banner;