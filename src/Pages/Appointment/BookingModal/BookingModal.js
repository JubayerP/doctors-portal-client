import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone
        }
        console.log(booking);

        setTreatment(null)
    }

    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-10 text-black">{name}</h3>
                    <form onSubmit={handleBooking} className='space-y-6'>
                        <input type="text" value={date} disabled className="input input-bordered focus:outline-0 w-full" />
                        <select name='slot' className="select select-bordered w-full focus:outline-0">
                            {
                                slots.map((slot, idx) => <option value={slot} key={idx}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered focus:outline-0 w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered focus:outline-0 w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered focus:outline-0 w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full font-normal' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;