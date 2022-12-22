import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOptions = ({ appointmentOption }) => {
    const { name, slots, _id, } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center my-5">
                <h2 className="text-xl font-semibold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <small>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</small>
                <div className="card-actions justify-center mt-4">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;