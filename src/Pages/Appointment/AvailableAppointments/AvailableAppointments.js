import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')


    const {data:appointmentOptions=[], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })


    return (
        <section className='my-16'>
            <p className='text-center text-secondary text-xl font-bold mb-10'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment} />)
                }
            </div>
            {treatment &&
                <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment} refetch={refetch} />}
        </section>
    );
};

export default AvailableAppointments;