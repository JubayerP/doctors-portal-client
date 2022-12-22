import React from 'react';
import Banner from '../Bannar/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <Services />
            <DentalCare />
        </div>
    );
};

export default Home;