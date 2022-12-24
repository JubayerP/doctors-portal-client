import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots, _id, } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center my-5">
                <h2 className="text-xl font-semibold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <small>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</small>
                <div className="card-actions justify-center mt-4">
                    <label disabled={slots.length === 0} onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary text-base-100 border-0">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;