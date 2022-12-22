import React from 'react';
import contact from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='my-10 p-10' style={{ background: `url(${contact})` }}>
            <div className='text-center my-12'>
                <h3 className='text-xl font-bold text-secondary uppercase'>Contact Us</h3>
                <h2 className='text-4xl text-base-100'>Stay Connected With Us</h2>
            </div>

            <div className='grid grid-cols-1 max-w-lg mx-auto gap-5'>
                <input type="text" placeholder="email" className="input input-bordered bg-base-100 focus:outline-0" />
                <input type="text" placeholder="subject" className="input input-bordered bg-base-100 focus:outline-0" />
                <textarea className="textarea bg-base-100 focus:outline-0" placeholder="message"></textarea>
                <div className='text-center'>
                <PrimaryButton >Contact</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;