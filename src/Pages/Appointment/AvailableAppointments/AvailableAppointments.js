import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary text-xl font-bold mb-10'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions key={appointmentOption._id} appointmentOption={appointmentOption} />)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;