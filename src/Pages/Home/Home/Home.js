import React from 'react';
import Banner from '../Bannar/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;