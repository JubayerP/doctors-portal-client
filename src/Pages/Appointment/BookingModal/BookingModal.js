import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed!');
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered focus:outline-0 w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered focus:outline-0 w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered focus:outline-0 w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full font-normal' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;